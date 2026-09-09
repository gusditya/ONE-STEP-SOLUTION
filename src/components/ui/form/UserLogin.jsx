import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function UserLogin({ onLoginSuccess }) {
    const [Nama, setNama] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    useEffect(() => {

        const handleOAuthCallback = async () => {
            const { data: { session } } = await supabase.auth.getSession();

            if (session?.user) {
                const googleUser = session.user;
                const userEmail = googleUser.email;
                const userName = googleUser.user_metadata?.full_name || googleUser.user_metadata?.name || 'Google User';

                const { data: dbData, error: dbError } = await supabase
                    .from('Login')
                    .upsert(
                        [
                            {
                                Email: userEmail,
                                Nama: userName,
                                Password: 'OAUTH_GOOGLE'
                            }
                        ],
                        { onConflict: 'Email' }
                    )
                    .select();

                const userData = (dbData && dbData.length > 0) ? dbData[0] : { Nama: userName, Email: userEmail };

                localStorage.setItem('user_session', JSON.stringify(userData));
                if (onLoginSuccess) onLoginSuccess(userData);
            }
        };

        handleOAuthCallback();

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
                const userEmail = session.user.email;
                const userName = session.user.user_metadata?.full_name || session.user.user_metadata?.name || 'Google User';

                const { data: dbData } = await supabase
                    .from('Login')
                    .upsert([{ Email: userEmail, Nama: userName, Password: 'OAUTH_GOOGLE' }], { onConflict: 'Email' })
                    .select();

                const userData = (dbData && dbData.length > 0) ? dbData[0] : { Nama: userName, Email: userEmail };
                localStorage.setItem('user_session', JSON.stringify(userData));
                if (onLoginSuccess) onLoginSuccess(userData);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [onLoginSuccess]);

    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            setMessage(null);

            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                },
            });

            if (error) throw error;
        } catch (error) {
            setMessage({ type: 'error', text: error.message });
            setLoading(false);
        }
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const cleanEmail = Email.trim();
        const cleanPassword = Password.trim();
        const cleanNama = Nama.trim();

        try {
            if (isRegister) {
                const { data, error: dbError } = await supabase
                    .from('Login')
                    .insert([
                        {
                            Nama: cleanNama,
                            Email: cleanEmail,
                            Password: cleanPassword
                        }
                    ])
                    .select();

                if (dbError) {
                    setMessage({
                        type: 'error',
                        text: `Gagal menyimpan: ${dbError.message}`
                    });
                    return;
                }

                const newUser = (data && data.length > 0) ? data[0] : { Nama: cleanNama, Email: cleanEmail };
                setMessage({ type: 'success', text: 'Registrasi berhasil! Mengalihkan...' });
                localStorage.setItem('user_session', JSON.stringify(newUser));

                setTimeout(() => {
                    if (onLoginSuccess) onLoginSuccess(newUser);
                }, 1000);

            } else {
                const { data, error: dbError } = await supabase
                    .from('Login')
                    .select('*')
                    .ilike('Email', cleanEmail)
                    .eq('Password', cleanPassword);

                if (dbError) throw dbError;

                if (data && data.length > 0) {
                    localStorage.setItem('user_session', JSON.stringify(data[0]));
                    if (onLoginSuccess) onLoginSuccess(data[0]);
                } else {
                    setMessage({ type: 'error', text: 'Email atau password salah.' });
                }
            }
        } catch (error) {
            setMessage({ type: 'error', text: error.message || 'Terjadi kesalahan sistem.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2>{isRegister ? 'Daftar Akun Baru' : 'Login ke Aplikasi'}</h2>

                {message && (
                    <div style={{
                        ...styles.alert,
                        backgroundColor: message.type === 'error' ? '#fee2e2' : '#dcfce7',
                        color: message.type === 'error' ? '#991b1b' : '#166534',
                    }}>
                        {message.text}
                    </div>
                )}

                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    style={styles.googleButton}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" style={{ marginRight: '8px' }}>
                        <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.616z" />
                        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
                        <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
                        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
                    </svg>
                    {loading ? 'Memproses...' : 'Lanjutkan dengan Google'}
                </button>

                <div style={styles.divider}>
                    <span style={styles.dividerText}>atau</span>
                </div>

                <form onSubmit={handleAuth} style={styles.form}>
                    {isRegister && (
                        <div style={styles.inputGroup}>
                            <label>Nama Lengkap:</label>
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                value={Nama}
                                onChange={(e) => setNama(e.target.value)}
                                required
                                style={styles.input}
                            />
                        </div>
                    )}

                    <div style={styles.inputGroup}>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="nama@email.com"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" disabled={loading} style={styles.button}>
                        {loading ? 'Memproses...' : isRegister ? 'Daftar & Masuk' : 'Masuk'}
                    </button>
                </form>

                <p style={styles.switchText}>
                    {isRegister ? 'Sudah punya akun?' : 'Belum punya akun?'} {' '}
                    <span
                        style={styles.switchLink}
                        onClick={() => {
                            setIsRegister(!isRegister);
                            setMessage(null);
                        }}
                    >
                        {isRegister ? 'Login di sini' : 'Daftar sekarang'}
                    </span>
                </p>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f1f5f9',
        fontFamily: 'Arial, sans-serif',
        width: '100%'
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '320px',
        textAlign: 'center'
    },
    googleButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '10px',
        backgroundColor: '#ffffff',
        color: '#374151',
        border: '1px solid #d1d5db',
        borderRadius: '6px',
        fontWeight: 'bold',
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '10px'
    },
    divider: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        margin: '16px 0',
        borderBottom: '1px solid #e2e8f0',
        lineHeight: '0.1em'
    },
    dividerText: {
        backgroundColor: '#fff',
        padding: '0 10px',
        color: '#94a3b8',
        fontSize: '12px',
        margin: '0 auto'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'left'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
    },
    input: {
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #cbd5e1',
        fontSize: '14px'
    },
    button: {
        padding: '12px',
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '8px'
    },
    alert: {
        padding: '10px',
        borderRadius: '6px',
        fontSize: '13px',
        marginBottom: '12px'
    },
    switchText: {
        fontSize: '13px',
        color: '#64748b',
        marginTop: '20px'
    },
    switchLink: {
        color: '#3b82f6',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'underline'
    }
};
