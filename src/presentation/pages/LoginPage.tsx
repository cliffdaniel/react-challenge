'use client';

import { useState, useTransition } from 'react';
import { useLogin } from '@/application/use-cases/useLogin';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const { login } = useLogin();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startTransition(() => {
            void (async () => {
                const success = await login(email, password);
                if (success) {
                    navigate('/');
                } else {
                    setError('Invalid credentials');
                }
            })();
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-5"
            >
                <h1 className="text-xl font-semibold text-center">Login</h1>

                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? 'Logging in...' : 'Login'}
                </Button>
            </form>
        </div>
    );
};
