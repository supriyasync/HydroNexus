import React, { useState } from 'react';
import { Droplets, Eye, EyeOff, KeyRound, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext.tsx';

export function LoginPage() {
  const { login, setupAdmin } = useAuth();
  const [tab, setTab] = useState<'login' | 'setup'>('login');

  // Login state
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberSession, setRememberSession] = useState(true);

  // Authorized Admin Setup state
  const [setupKey, setSetupKey] = useState('');
  const [fullName, setFullName] = useState('');
  const [designation, setDesignation] = useState('Assistant Engineer (Water Works)');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [setupPassword, setSetupPassword] = useState('');
  const [showSetupPassword, setShowSetupPassword] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!identifier.trim() || !password) {
      setError('Please enter your municipal email/username and password.');
      return;
    }
    setSubmitting(true);
    try {
      await login(identifier.trim(), password, rememberSession);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to authenticate.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!setupKey.trim() || !email.trim() || !username.trim() || !fullName.trim()) {
      setError('All administrator provisioning fields are required.');
      return;
    }
    if (setupPassword.length < 8) {
      setError('Administrator password must be at least 8 characters.');
      return;
    }
    setSubmitting(true);
    try {
      await setupAdmin({
        setupKey: setupKey.trim(),
        email: email.trim(),
        username: username.trim(),
        password: setupPassword,
        fullName: fullName.trim(),
        designation: designation.trim() || 'Municipal Water Operator',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Provisioning failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const fillDemoOperator = () => {
    setTab('login');
    setIdentifier('operator@indoreimc.gov.in');
    setPassword('HydroNexus@IMC2026');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F4F2EA] flex flex-col lg:flex-row">
      {/* Left Brand & Context Panel */}
      <div className="lg:w-[46%] bg-[#164653] text-[#FFFEFA] p-8 lg:p-14 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#168B83] flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight">HydroNexus</div>
              <div className="text-xs text-[#D9ECE6]/80">
                Intelligent Water Infrastructure Platform
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-md space-y-4">
            <div className="text-xs font-medium text-[#D9ECE6]">
              Indore Municipal Corporation (IMC) · Madhya Pradesh
            </div>
            <h1 className="text-3xl font-semibold leading-tight text-white">
              Municipal Water Distribution & Telemetry Operations Console
            </h1>
            <p className="text-sm text-[#D9ECE6]/85 leading-relaxed">
              Centralized monitoring for Indore&apos;s water reservoirs, overhead tanks, inlet
              and outlet flow meters, pipeline pressure transducers, and anomaly verification
              workflows.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 space-y-2 text-xs text-[#D9ECE6]/80">
          <div className="flex items-center gap-2 text-white font-medium">
            <ShieldCheck className="w-4 h-4 text-[#168B83]" />
            <span>Restricted Municipal Access Only</span>
          </div>
          <p>
            Authorized for Indore Municipal Corporation water operations engineers. Public
            citizen registration is disabled; new operator accounts require an IMC provisioning
            key.
          </p>
        </div>
      </div>

      {/* Right Authentication Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md bg-[#FFFEFA] border border-[#E7E4DB] rounded-lg p-6 lg:p-8">
          <div className="flex items-center gap-1 p-1 bg-[#F4F2EA] rounded-md border border-[#E7E4DB] mb-6">
            <button
              type="button"
              onClick={() => {
                setTab('login');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-medium rounded transition-colors ${
                tab === 'login'
                  ? 'bg-[#FFFEFA] text-[#164653] border border-[#E7E4DB]'
                  : 'text-[#71817E] hover:text-[#164653]'
              }`}
            >
              Operator Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('setup');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-medium rounded transition-colors ${
                tab === 'setup'
                  ? 'bg-[#FFFEFA] text-[#164653] border border-[#E7E4DB]'
                  : 'text-[#71817E] hover:text-[#164653]'
              }`}
            >
              Authorized Admin Setup
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-md bg-[#FDF3F2] border border-[#C64F49]/30 text-xs text-[#9C3530]">
              {error}
            </div>
          )}

          {tab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-[#164653]">
                  Municipal Operator Login
                </h2>
                <p className="text-xs text-[#71817E] mt-0.5">
                  Sign in with your IMC operator email or username.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1.5">
                  Email or Username
                </label>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="operator@indoreimc.gov.in"
                  autoComplete="username"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter operator password"
                    autoComplete="current-password"
                    className="w-full px-3 py-2 pr-10 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71817E] hover:text-[#164653]"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-[#71817E] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberSession}
                  onChange={(e) => setRememberSession(e.target.checked)}
                  className="rounded border-[#E7E4DB] text-[#168B83] focus:ring-[#168B83]"
                />
                <span>Remember operator session on this workstation (7 days)</span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 px-4 rounded-md bg-[#168B83] hover:bg-[#13756E] text-white text-sm font-medium transition-colors disabled:opacity-60"
              >
                {submitting ? 'Authenticating...' : 'Sign In to HydroNexus'}
              </button>

              <div className="pt-4 border-t border-[#E7E4DB] space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-[#71817E]">Pre-seeded Demonstration Operator</span>
                  <button
                    type="button"
                    onClick={fillDemoOperator}
                    className="text-[#168B83] font-medium hover:underline"
                  >
                    Fill Demo Credentials
                  </button>
                </div>
                <div className="p-2.5 rounded bg-[#F4F2EA] border border-[#E7E4DB] font-mono text-[11px] text-[#164653] space-y-0.5">
                  <div>User: operator@indoreimc.gov.in</div>
                  <div>Pass: HydroNexus@IMC2026</div>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSetup} className="space-y-3.5">
              <div>
                <h2 className="text-lg font-semibold text-[#164653]">
                  Provision Municipal Operator
                </h2>
                <p className="text-xs text-[#71817E] mt-0.5">
                  Requires authorized IMC provisioning key from environment configuration.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1">
                  IMC Provisioning Key
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={setupKey}
                    onChange={(e) => setSetupKey(e.target.value)}
                    placeholder="Enter ADMIN_SETUP_KEY"
                    className="w-full px-3 py-2 pl-9 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                  <KeyRound className="w-4 h-4 text-[#71817E] absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#164653] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Priya Joshi"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#164653] mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="priya_imc"
                    className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1">
                  Municipal Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@indoreimc.gov.in"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#164653] mb-1">
                  Password (min 8 chars)
                </label>
                <div className="relative">
                  <input
                    type={showSetupPassword ? 'text' : 'password'}
                    value={setupPassword}
                    onChange={(e) => setSetupPassword(e.target.value)}
                    placeholder="Create strong operator password"
                    className="w-full px-3 py-2 pr-10 text-sm bg-white border border-[#E7E4DB] rounded-md text-[#164653] focus:outline-none focus:border-[#168B83]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSetupPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#71817E] hover:text-[#164653]"
                  >
                    {showSetupPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 px-4 rounded-md bg-[#164653] hover:bg-[#168B83] text-white text-sm font-medium transition-colors disabled:opacity-60"
              >
                {submitting ? 'Provisioning...' : 'Provision Operator & Sign In'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
