import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Droplets,
  Gauge,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  X,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext.tsx';
import { useTelemetry } from '../../context/TelemetryContext.tsx';
import { formatShortTime } from '../common/StatusLabel.tsx';

export type NavSectionKey =
  | 'overview'
  | 'pipeline'
  | 'flow'
  | 'pressure'
  | 'alerts'
  | 'health'
  | 'insights'
  | 'settings';

interface NavItem {
  key: NavSectionKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'overview', label: 'Overview Dashboard', icon: LayoutDashboard },
  { key: 'pipeline', label: 'Pipeline Monitoring', icon: MapPin },
  { key: 'flow', label: 'Flow Analysis', icon: Activity },
  { key: 'pressure', label: 'Pressure Monitoring', icon: Gauge },
  { key: 'alerts', label: 'Alert Centre', icon: AlertTriangle },
  { key: 'health', label: 'System Health', icon: HeartPulse },
  { key: 'insights', label: 'Water Insights', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export function AppShell({
  activeSection,
  onSelectSection,
  children,
}: {
  activeSection: NavSectionKey;
  onSelectSection: (section: NavSectionKey) => void;
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const { summary, apiConnected, switchMode } = useTelemetry();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [switchingMode, setSwitchingMode] = useState(false);

  const currentNav = NAV_ITEMS.find((i) => i.key === activeSection) ?? NAV_ITEMS[0];
  const isDemo = (summary?.mode ?? 'DEMO') === 'DEMO';
  const activeAlerts = summary?.activeAlertCount ?? 0;

  const handleModeToggle = async (target: 'DEMO' | 'LIVE') => {
    if (switchingMode || summary?.mode === target) return;
    setSwitchingMode(true);
    try {
      await switchMode(target);
    } finally {
      setSwitchingMode(false);
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#164653] text-[#FFFEFA]">
      <div className="h-16 px-4 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-md bg-[#168B83] flex items-center justify-center shrink-0">
            <Droplets className="w-4 h-4 text-[#FFFEFA]" />
          </div>
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <div className="text-base font-semibold tracking-tight truncate">HydroNexus</div>
              <div className="text-[11px] text-[#D9ECE6]/80 truncate">IMC Indore Water</div>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setSidebarCollapsed((v) => !v)}
          className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded text-[#D9ECE6]/80 hover:text-white hover:bg-white/10 transition-colors"
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="w-4 h-4" />
          ) : (
            <PanelLeftClose className="w-4 h-4" />
          )}
        </button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded text-[#D9ECE6]/80 hover:text-white"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 py-4 px-2.5 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                onSelectSection(item.key);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                active
                  ? 'bg-[#168B83] text-white'
                  : 'text-[#D9ECE6]/85 hover:bg-white/10 hover:text-white'
              }`}
              title={sidebarCollapsed ? item.label : undefined}
            >
              <span className="flex items-center gap-3 min-w-0">
                <Icon className="w-4 h-4 shrink-0" />
                {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
              </span>
              {!sidebarCollapsed && item.key === 'alerts' && activeAlerts > 0 && (
                <span className="font-mono tabular-nums text-xs px-1.5 py-0.5 rounded bg-[#D9A441] text-[#164653] font-semibold">
                  {activeAlerts}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10 text-xs text-[#D9ECE6]/80">
        {!sidebarCollapsed ? (
          <div className="space-y-1">
            <div className="font-medium text-white truncate">{user?.fullName}</div>
            <div className="truncate text-[11px] text-[#D9ECE6]/70">{user?.designation}</div>
            <div className="pt-1 text-[11px] text-[#D9ECE6]/60">
              Indore Municipal Corporation
            </div>
          </div>
        ) : (
          <div className="text-center font-mono text-[11px]" title={user?.fullName}>
            IMC
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#F4F2EA] text-[#164653]">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:block shrink-0 transition-[width] duration-150 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="sticky top-0 h-screen">{sidebarContent}</div>
      </aside>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-[#164653]/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full z-10">{sidebarContent}</div>
        </div>
      )}

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-[#FFFEFA] border-b border-[#E7E4DB] px-4 lg:px-6 flex items-center justify-between gap-4 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-[#E7E4DB] text-[#164653] hover:bg-[#F4F2EA]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div className="min-w-0">
              <div className="text-xs text-[#71817E] truncate">
                Indore Municipal Corporation · Water Infrastructure Operations
              </div>
              <h1 className="text-base lg:text-lg font-semibold text-[#164653] truncate">
                {currentNav.label}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-3 text-xs text-[#71817E]">
              <span>
                API:{' '}
                <strong className={apiConnected ? 'text-[#168B83]' : 'text-[#C64F49]'}>
                  {apiConnected ? 'Connected' : 'Disconnected'}
                </strong>
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                Last Data:{' '}
                {summary?.lastSuccessfulAt ? formatShortTime(summary.lastSuccessfulAt) : '—'}
              </span>
            </div>

            <div
              className="inline-flex items-center p-0.5 rounded-md border border-[#E7E4DB] bg-[#F4F2EA]"
              role="group"
              aria-label="Data source mode"
            >
              <button
                type="button"
                disabled={switchingMode}
                onClick={() => handleModeToggle('DEMO')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  isDemo
                    ? 'bg-[#164653] text-white'
                    : 'text-[#71817E] hover:text-[#164653]'
                }`}
              >
                Demo Mode
              </button>
              <button
                type="button"
                disabled={switchingMode}
                onClick={() => handleModeToggle('LIVE')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 ${
                  !isDemo
                    ? 'bg-[#168B83] text-white'
                    : 'text-[#71817E] hover:text-[#164653]'
                }`}
              >
                Live Mode
              </button>
            </div>

            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-[#E7E4DB] bg-[#FFFEFA] text-[#164653] hover:bg-[#F4F2EA] transition-colors whitespace-nowrap shrink-0"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </header>

        {/* Strict Live Mode Unavailable Banner */}
        {summary && summary.mode === 'LIVE' && !summary.liveAvailable && (
          <div className="bg-[#FDF3F2] border-b border-[#C64F49]/30 px-4 lg:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9C3530]">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#C64F49]" />
              <span>
                <strong>Live Data Unavailable:</strong> {summary.liveError} Simulated readings
                are not substituted in Live Mode.
                {summary.lastSuccessfulAt && (
                  <>
                    {' '}
                    Last valid live reading:{' '}
                    <span className="font-mono tabular-nums">
                      {formatShortTime(summary.lastSuccessfulAt)}
                    </span>
                    .
                  </>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelectSection('settings')}
                className="underline font-medium hover:text-[#164653] whitespace-nowrap"
              >
                Configure ESP32 Endpoint
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => handleModeToggle('DEMO')}
                className="px-2.5 py-1 rounded bg-[#164653] text-white font-medium hover:bg-[#168B83] transition-colors whitespace-nowrap"
              >
                Switch to Demo Mode
              </button>
            </div>
          </div>
        )}

        {/* Demonstration Mode Disclosure Bar */}
        {summary && summary.mode === 'DEMO' && (
          <div className="bg-[#D9ECE6]/55 border-b border-[#E7E4DB] px-4 lg:px-6 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#164653]">
            <span>
              <strong>DEMO MODE</strong> — Active readings are backend-simulated{' '}
              <strong>DEMONSTRATION DATA</strong> (Scenario:{' '}
              <span className="font-mono">{summary.scenario}</span>).
            </span>
            <span className="text-[#71817E]">
              Switch to Live Mode in the top bar or Settings when ESP32 hardware is online.
            </span>
          </div>
        )}

        <main className="flex-1 p-4 lg:p-6 max-w-[1440px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
