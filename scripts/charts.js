/**
 * Harinakshi Baishya - Social Media Portfolio
 * Interactive SVG/Canvas Chart Engine for the "Measure What Matters" Analytics Dashboard
 * 
 * NOTE: All data visualized is marked "DEMO DATA — FOR PORTFOLIO PURPOSES ONLY"
 */

class AnalyticsVisualizer {
  constructor() {
    this.container = document.getElementById("analytics-chart-container");
    this.retentionContainer = document.getElementById("retention-chart-container");
  }

  init() {
    this.renderFormatChart();
    this.renderRetentionChart();
    window.addEventListener("resize", () => {
      this.renderFormatChart();
      this.renderRetentionChart();
    });
  }

  renderFormatChart() {
    if (!this.container) return;

    const data = PORTFOLIO_DATA.demoAnalytics.formatPerformance;
    const width = this.container.clientWidth || 560;
    const height = 240;
    const padding = { top: 30, right: 30, bottom: 40, left: 90 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const barHeight = 24;
    const gap = (chartHeight - barHeight * data.length) / (data.length - 1);

    let barsSvg = "";
    data.forEach((item, index) => {
      const y = padding.top + index * (barHeight + gap);
      const barW = (item.reachPct / 50) * chartWidth; // scale relative to 50% max

      barsSvg += `
        <g class="chart-bar-group" data-format="${item.format}">
          <text x="${padding.left - 12}" y="${y + barHeight / 2 + 4}" text-anchor="end" fill="#52525B" font-size="12" font-weight="600" font-family="inherit">
            ${item.format}
          </text>
          
          <!-- Background track -->
          <rect x="${padding.left}" y="${y}" width="${chartWidth}" height="${barHeight}" rx="6" fill="#F4F4F5" />
          
          <!-- Animated Active Bar -->
          <rect class="bar-fill" x="${padding.left}" y="${y}" width="${barW}" height="${barHeight}" rx="6" fill="url(#coralGradient)">
            <title>${item.format}: ${item.reachPct}% Reach Share | ${item.savesCount} Saves</title>
          </rect>
          
          <!-- Metric Label Inside/Beside Bar -->
          <text x="${padding.left + barW + 10}" y="${y + barHeight / 2 + 4}" fill="#18181B" font-size="12" font-weight="700" font-family="inherit">
            ${item.reachPct}% Reach <tspan fill="#71717A" font-weight="500">(${item.savesCount} saves)</tspan>
          </text>
        </g>
      `;
    });

    const svg = `
      <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Format Performance Bar Chart">
        <defs>
          <linearGradient id="coralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#FF4D2E" />
            <stop offset="100%" stop-color="#FF7A59" />
          </linearGradient>
        </defs>
        
        <!-- Gridlines -->
        <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="#E4E4E7" stroke-dasharray="2 2" />
        <line x1="${padding.left + chartWidth * 0.5}" y1="${padding.top}" x2="${padding.left + chartWidth * 0.5}" y2="${height - padding.bottom}" stroke="#E4E4E7" stroke-dasharray="2 2" />
        <line x1="${padding.left + chartWidth}" y1="${padding.top}" x2="${padding.left + chartWidth}" y2="${height - padding.bottom}" stroke="#E4E4E7" stroke-dasharray="2 2" />
        
        <!-- X Axis Labels -->
        <text x="${padding.left}" y="${height - padding.bottom + 18}" font-size="10" fill="#A1A1AA" text-anchor="middle">0%</text>
        <text x="${padding.left + chartWidth * 0.5}" y="${height - padding.bottom + 18}" font-size="10" fill="#A1A1AA" text-anchor="middle">25% Share</text>
        <text x="${padding.left + chartWidth}" y="${height - padding.bottom + 18}" font-size="10" fill="#A1A1AA" text-anchor="middle">50% Share</text>

        ${barsSvg}
      </svg>
    `;

    this.container.innerHTML = svg;
  }

  renderRetentionChart() {
    if (!this.retentionContainer) return;

    const width = this.retentionContainer.clientWidth || 560;
    const height = 240;
    const padding = { top: 30, right: 30, bottom: 40, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Standard vs Optimized retention curve points (seconds: 0 to 30)
    // Strong hook retains 68% past 3s vs standard 35%
    const optimizedCurve = [
      { s: 0, pct: 100 },
      { s: 3, pct: 72 },
      { s: 6, pct: 64 },
      { s: 12, pct: 58 },
      { s: 18, pct: 52 },
      { s: 24, pct: 47 },
      { s: 30, pct: 42 }
    ];

    const benchmarkCurve = [
      { s: 0, pct: 100 },
      { s: 3, pct: 36 },
      { s: 6, pct: 28 },
      { s: 12, pct: 21 },
      { s: 18, pct: 16 },
      { s: 24, pct: 12 },
      { s: 30, pct: 8 }
    ];

    const getX = (sec) => padding.left + (sec / 30) * chartWidth;
    const getY = (pct) => padding.top + chartHeight - (pct / 100) * chartHeight;

    const makePath = (points) => {
      return points.map((p, i) => `${i === 0 ? "M" : "L"} ${getX(p.s).toFixed(1)} ${getY(p.pct).toFixed(1)}`).join(" ");
    };

    const optPath = makePath(optimizedCurve);
    const benchPath = makePath(benchmarkCurve);
    const areaPath = `${optPath} L ${getX(30)} ${getY(0)} L ${getX(0)} ${getY(0)} Z`;

    const svg = `
      <svg width="100%" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Audience Retention Curve">
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FF4D2E" stop-opacity="0.25" />
            <stop offset="100%" stop-color="#FF4D2E" stop-opacity="0.0" />
          </linearGradient>
        </defs>

        <!-- Horizontal Guides -->
        <line x1="${padding.left}" y1="${getY(100)}" x2="${padding.left + chartWidth}" y2="${getY(100)}" stroke="#F4F4F5" />
        <line x1="${padding.left}" y1="${getY(50)}" x2="${padding.left + chartWidth}" y2="${getY(50)}" stroke="#E4E4E7" stroke-dasharray="3 3" />
        <line x1="${padding.left}" y1="${getY(0)}" x2="${padding.left + chartWidth}" y2="${getY(0)}" stroke="#D4D4D8" />

        <!-- Y Axis Labels -->
        <text x="${padding.left - 10}" y="${getY(100) + 4}" font-size="10" fill="#71717A" text-anchor="end">100%</text>
        <text x="${padding.left - 10}" y="${getY(50) + 4}" font-size="10" fill="#71717A" text-anchor="end">50%</text>
        <text x="${padding.left - 10}" y="${getY(0) + 4}" font-size="10" fill="#71717A" text-anchor="end">0%</text>

        <!-- Area fill under optimized curve -->
        <path d="${areaPath}" fill="url(#areaGradient)" />

        <!-- Benchmark Path (Average content) -->
        <path d="${benchPath}" fill="none" stroke="#A1A1AA" stroke-width="2" stroke-dasharray="4 4" />

        <!-- Optimized Path (Strategic hook) -->
        <path d="${optPath}" fill="none" stroke="#FF4D2E" stroke-width="3" />

        <!-- Data points on optimized line -->
        ${optimizedCurve.map(p => `
          <circle cx="${getX(p.s)}" cy="${getY(p.pct)}" r="4" fill="#FFFFFF" stroke="#FF4D2E" stroke-width="2">
            <title>${p.s}s: ${p.pct}% audience retained</title>
          </circle>
        `).join("")}

        <!-- X Axis Labels -->
        <text x="${getX(0)}" y="${height - padding.bottom + 18}" font-size="10" fill="#71717A" text-anchor="middle">0s</text>
        <text x="${getX(3)}" y="${height - padding.bottom + 18}" font-size="10" fill="#FF4D2E" font-weight="700" text-anchor="middle">3s (Hook)</text>
        <text x="${getX(15)}" y="${height - padding.bottom + 18}" font-size="10" fill="#71717A" text-anchor="middle">15s</text>
        <text x="${getX(30)}" y="${height - padding.bottom + 18}" font-size="10" fill="#71717A" text-anchor="middle">30s</text>

        <!-- Legend -->
        <g transform="translate(${padding.left + 15}, ${padding.top + 10})">
          <line x1="0" y1="0" x2="16" y2="0" stroke="#FF4D2E" stroke-width="3" />
          <text x="22" y="3" font-size="11" font-weight="600" fill="#18181B">Optimized Hook Strategy (72% at 3s)</text>
          
          <line x1="220" y1="0" x2="236" y2="0" stroke="#A1A1AA" stroke-width="2" stroke-dasharray="4 4" />
          <text x="242" y="3" font-size="11" fill="#71717A">Standard Industry Benchmark</text>
        </g>
      </svg>
    `;

    this.retentionContainer.innerHTML = svg;
  }
}

window.AnalyticsVisualizer = AnalyticsVisualizer;
