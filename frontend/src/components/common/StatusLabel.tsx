import { AlertTriangle, CheckCircle2, HelpCircle, XCircle } from 'lucide-react';
import type { ProvenanceStatus } from '@shared/types/index.ts';
import { PROVENANCE_LABELS } from '@shared/constants/index.ts';

export function SemanticStatusIndicator({
  tone,
  label,
}: {
  tone: 'normal' | 'warning' | 'critical' | 'demo' | 'muted';
  label: string;
}) {
  const iconClass = 'w-3.5 h-3.5 shrink-0';

  if (tone === 'normal') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#168B83]">
        <CheckCircle2 className={iconClass} />
        <span>{label}</span>
      </span>
    );
  }
  if (tone === 'warning') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B37E1E]">
        <AlertTriangle className={iconClass} />
        <span>{label}</span>
      </span>
    );
  }
  if (tone === 'critical') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C64F49]">
        <XCircle className={iconClass} />
        <span>{label}</span>
      </span>
    );
  }
  if (tone === 'demo') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#164653]">
        <HelpCircle className={iconClass} />
        <span>{label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71817E]">
      <span>{label}</span>
    </span>
  );
}

export function ProvenanceText({ status }: { status: ProvenanceStatus }) {
  const color =
    status === 'VERIFIED_PUBLIC'
      ? 'text-[#168B83]'
      : status === 'APPROXIMATE_PUBLIC'
        ? 'text-[#B37E1E]'
        : 'text-[#71817E]';

  return <span className={`text-xs font-medium ${color}`}>{PROVENANCE_LABELS[status]}</span>;
}

export function formatTimestamp(iso: string | null | undefined): string {
  if (!iso) return 'No data received';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return 'Invalid timestamp';
  return date.toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

export function formatShortTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
