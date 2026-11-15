import { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext.tsx';
import { AppShell, type NavSectionKey } from './components/layout/AppShell.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';
import { OverviewPage } from './pages/Overview/OverviewPage.tsx';
import { PipelineMonitoringPage } from './pages/PipelineMonitoring/PipelineMonitoringPage.tsx';
import { FlowAnalysisPage } from './pages/FlowAnalysis/FlowAnalysisPage.tsx';
import { PressureMonitoringPage } from './pages/PressureMonitoring/PressureMonitoringPage.tsx';
import { AlertCentrePage } from './pages/AlertCentre/AlertCentrePage.tsx';
import { SystemHealthPage } from './pages/SystemHealth/SystemHealthPage.tsx';
import { WaterInsightsPage } from './pages/WaterInsights/WaterInsightsPage.tsx';
import { SettingsPage } from './pages/Settings/SettingsPage.tsx';

export default function App() {
  const { user, isLoading } = useAuth();
  const [activeSection, setActiveSection] = useState<NavSectionKey>('overview');
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const onQuotaExceeded = () => setMapsQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', onQuotaExceeded);
    return () => window.removeEventListener('gmp-quota-exceeded', onQuotaExceeded);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F2EA] flex items-center justify-center text-sm text-[#164653]">
        Verifying IMC municipal operator session...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F2EA]">
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {!user ? (
        <LoginPage />
      ) : (
        <AppShell activeSection={activeSection} onSelectSection={setActiveSection}>
          {activeSection === 'overview' && (
            <OverviewPage onNavigate={setActiveSection} />
          )}
          {activeSection === 'pipeline' && (
            <PipelineMonitoringPage mapsQuotaExceeded={mapsQuotaExceeded} />
          )}
          {activeSection === 'flow' && <FlowAnalysisPage />}
          {activeSection === 'pressure' && <PressureMonitoringPage />}
          {activeSection === 'alerts' && <AlertCentrePage />}
          {activeSection === 'health' && <SystemHealthPage />}
          {activeSection === 'insights' && <WaterInsightsPage />}
          {activeSection === 'settings' && <SettingsPage />}
        </AppShell>
      )}
    </div>
  );
}
