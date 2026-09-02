import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Sesuaikan path supabaseClient Anda

export default function UserLogin({ onLoginSuccess }) {
    const [Nama, setNama] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const cleanEmail = Email.trim();
        const cleanPassword = Password.trim();
        const cleanNama = Nama.trim();

        try {
            if (isRegister) {
                // 1. REGISTER
                const { data, error: dbError } = await supabase
                    .from('Login')
                    .insert([{ Nama: cleanNama, Email: cleanEmail, Password: cleanPassword }])
                    .select();

                if (dbError) throw dbError;

                if (data && data.length > 0) {
                    onLoginSuccess(data[0]);
                }
            } else {
                const { data, error: dbError } = await supabase
                    .from('Login')
                    .select('*')
                    .ilike('Email', cleanEmail)
                    .eq('Password', cleanPassword);

                if (dbError) throw dbError;

                if (data && data.length > 0) {
                    onLoginSuccess(data[0]);
                } else {
                    setMessage({ type: 'error', text: 'Email atau password salah.' });
                }
            }
        } catch (error) {
            setMessage({ type: 'error', text: error.message });
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
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: 'Arial, sans-serif', width: '100%' },
    card: { backgroundColor: '#ffffff', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '320px', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px', textAlign: 'left' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
    input: { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' },
    button: { padding: '12px', backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginTop: '8px' },
    alert: { padding: '10px', borderRadius: '6px', fontSize: '13px', marginBottom: '12px' },
    switchText: { fontSize: '13px', color: '#64748b', marginTop: '20px' },
    switchLink: { color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }
};
