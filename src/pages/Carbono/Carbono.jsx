import CarbonoHeader from './sections/CarbonoHeader';
import CertificationPanel from './sections/CertificationPanel';
import KpiSummary from './sections/KpiSummary';
import ImpactSection from './sections/ImpactSection';
import OriginSection from './sections/OriginSection';
import ContractPanel from './sections/ContractPanel';
import HistoryTimeline from './sections/HistoryTimeline';
import TraceabilitySection from './sections/TraceabilitySection';
import StandardsSection from './sections/StandardsSection';
import StatusAlerts from './sections/StatusAlerts';

function Carbono() {
  return (
    <div className="carbono-page">
      <CarbonoHeader />
      <CertificationPanel />
      <KpiSummary />
      <ImpactSection />
      <OriginSection />
      <ContractPanel />
      <HistoryTimeline />
      <TraceabilitySection />
      <StandardsSection />
      <StatusAlerts />
    </div>
  );
}

export default Carbono;
