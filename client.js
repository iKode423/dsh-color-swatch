window.__ModuleLoader__.load({
  id: '@local/color-swatch',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const FLAG = 'data-dsh-color-swatch';
    const DOT = 'dsh-color-swatch-dot';
    const DOT_SELECTOR = '.' + DOT;
    const POPOVER_SELECTOR = '.dsh-color-popover';
    const NS = 'color-swatch';

    const STYLES = `
.${DOT} {
  position: relative;
  display: inline-block;
  flex: none;
  box-sizing: border-box;
  width: .72em;
  height: .72em;
  margin-right: .45em;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--dsh-color-swatch, transparent);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .34), 0 0 0 1px rgba(0, 0, 0, .24);
  vertical-align: -.08em;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: transform .12s ease, box-shadow .12s ease;
}
.${DOT}::after {
  content: "";
  position: absolute;
  inset: -5px;
  border-radius: 50%;
}
.${DOT}:hover {
  transform: scale(1.22);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .4), 0 0 0 1px rgba(0, 0, 0, .28), 0 2px 8px rgba(0, 0, 0, .22);
}
.dsh-color-popover {
  position: fixed;
  z-index: 2147483000;
  box-sizing: border-box;
  width: 296px;
  max-height: calc(100vh - 24px);
  padding: 12px;
  overflow-y: auto;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-overlay);
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, .18), 0 2px 8px rgba(0, 0, 0, .08);
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsh-font-family-text, "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif);
  pointer-events: auto;
  animation: dsh-color-pop-in .14s ease-out both;
}
.dsh-color-popover-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 2px 10px;
}
.dsh-color-chip {
  flex: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .3), 0 0 0 1px rgba(0, 0, 0, .14);
}
.dsh-color-popover-copy {
  min-width: 0;
}
.dsh-color-popover-title {
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
}
.dsh-color-popover-hint {
  font-size: 11px;
  line-height: 15px;
  color: var(--dsw-alias-label-secondary);
}
.dsh-color-rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.dsh-color-row {
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 7px 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.dsh-color-row:hover,
.dsh-color-row:focus-visible {
  background: var(--dsw-alias-bg-layer-2);
}
.dsh-color-row:focus-visible {
  outline: 1.5px solid var(--dsw-alias-brand-primary);
  outline-offset: -1.5px;
}
.dsh-color-row-label {
  flex: none;
  width: 54px;
  font-size: 10px;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--dsw-alias-label-secondary);
}
.dsh-color-row-value {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dsh-color-row-icon {
  display: inline-flex;
  flex: none;
  color: var(--dsw-alias-label-secondary);
  opacity: 0;
  transition: opacity .12s ease;
}
.dsh-color-row:hover .dsh-color-row-icon,
.dsh-color-row:focus-visible .dsh-color-row-icon,
.dsh-color-row.is-copied .dsh-color-row-icon {
  opacity: 1;
}
.dsh-color-row.is-copied .dsh-color-row-icon {
  color: var(--dsw-alias-state-success-primary);
}
.dsh-color-toast {
  position: fixed;
  left: 50%;
  bottom: 96px;
  z-index: 2147483000;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: 0 8px 24px rgba(0, 0, 0, .18);
  color: var(--dsw-alias-label-primary);
  font-family: var(--dsh-font-family-text, "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif);
  font-size: 12.5px;
  line-height: 18px;
  transform: translateX(-50%);
  pointer-events: none;
  animation: dsh-color-toast-in .18s ease-out both;
}
.dsh-color-toast svg {
  flex: none;
  color: var(--dsw-alias-state-success-primary);
}
.dsh-color-toast.is-error svg {
  color: var(--dsw-alias-state-error-primary);
}
@keyframes dsh-color-pop-in {
  from { opacity: 0; transform: translateY(-3px) scale(.98); }
  to { opacity: 1; transform: none; }
}
@keyframes dsh-color-toast-in {
  from { opacity: 0; transform: translate(-50%, 6px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}
@media (prefers-reduced-motion: reduce) {
  .${DOT} { transition: none; }
  .${DOT}:hover { transform: none; }
  .dsh-color-popover,
  .dsh-color-toast { animation: none; }
}
`;

    const TEXT = {
      zh: {
        'popover.title': '颜色值',
        'popover.hint': '点击任意写法即可复制',
        'label.hex': 'HEX',
        'label.rgb': 'RGB',
        'label.hsl': 'HSL',
        'label.name': 'CSS 名称',
        'label.css': 'CSS',
        'toast.copied': '已复制 {label} · {value}',
        'toast.failed': '复制失败，请手动选择复制'
      },
      en: {
        'popover.title': 'Color values',
        'popover.hint': 'Click a format to copy',
        'label.hex': 'HEX',
        'label.rgb': 'RGB',
        'label.hsl': 'HSL',
        'label.name': 'CSS name',
        'label.css': 'CSS',
        'toast.copied': 'Copied {label} · {value}',
        'toast.failed': 'Copy failed. Select and copy manually.'
      }
    };

    const NAMED_COLORS = new Set((
      'aliceblue antiquewhite aqua aquamarine azure beige bisque black ' +
      'blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse ' +
      'chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan ' +
      'darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta ' +
      'darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen ' +
      'darkslateblue darkslategray darkslategrey darkturquoise darkviolet ' +
      'deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite ' +
      'forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green ' +
      'greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender ' +
      'lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan ' +
      'lightgoldenrodyellow lightgray lightgreen lightgrey lightpink ' +
      'lightsalmon lightseagreen lightskyblue lightslategray lightslategrey ' +
      'lightsteelblue lightyellow lime limegreen linen magenta maroon ' +
      'mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen ' +
      'mediumslateblue mediumspringgreen mediumturquoise mediumvioletred ' +
      'midnightblue mintcream mistyrose moccasin navajowhite navy oldlace ' +
      'olive olivedrab orange orangered orchid palegoldenrod palegreen ' +
      'paleturquoise palevioletred papayawhip peachpuff peru pink plum ' +
      'powderblue purple rebeccapurple red rosybrown royalblue saddlebrown ' +
      'salmon sandybrown seagreen seashell sienna silver skyblue slateblue ' +
      'slategray slategrey snow springgreen steelblue tan teal thistle tomato ' +
      'turquoise violet wheat white whitesmoke yellow yellowgreen'
    ).split(' '));

    const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    const PREFIXED_HEX = /^0x(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    const COLOR_FUNCTION = /^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(/i;
    const SUBSTITUTION = /(?:var|env|attr)\(/i;
    const UNSAFE_TEXT = /[\u0000-\u001f]/;

    let canAskBrowser = null;
    let clientCtx = null;
    let colorCanvas = null;
    let namedHexMap = null;

    function browserSupportsColor(value) {
      if (canAskBrowser === null) {
        try {
          canAskBrowser = typeof CSS !== 'undefined' && typeof CSS.supports === 'function';
        } catch (error) {
          canAskBrowser = false;
        }
      }
      if (!canAskBrowser) {
        return /^(?:rgb|rgba|hsl|hsla)\(\s*[0-9.,%/\sa-z-]+\)$/i.test(value);
      }
      try {
        return CSS.supports('color', value);
      } catch (error) {
        return false;
      }
    }

    /** Return a CSS color for one inline-code text, or null when it is not a color. */
    function normalizeColor(raw) {
      const value = raw.trim();
      if (value.length === 0 || value.length > 80 || UNSAFE_TEXT.test(value)) return null;
      if (HEX.test(value)) return value;
      if (PREFIXED_HEX.test(value)) return '#' + value.slice(2);
      if (SUBSTITUTION.test(value)) return null;
      if (COLOR_FUNCTION.test(value)) {
        return browserSupportsColor(value) ? value : null;
      }
      const lower = value.toLowerCase();
      if (NAMED_COLORS.has(lower)) return lower;
      return null;
    }

    function canvasContext() {
      if (colorCanvas === null) {
        colorCanvas = document.createElement('canvas');
        colorCanvas.width = 1;
        colorCanvas.height = 1;
      }
      return colorCanvas.getContext('2d');
    }

    /** Convert any CSS color into sRGB channels with alpha, or null when unreadable. */
    function parseCssColor(value) {
      try {
        const context = canvasContext();
        if (!context) return null;
        context.clearRect(0, 0, 1, 1);
        // Two probes distinguish an unreadable value from a color that happens
        // to equal the first probe: an invalid assignment keeps the old value.
        context.fillStyle = '#010203';
        context.fillStyle = value;
        const firstProbe = String(context.fillStyle);
        context.fillStyle = '#040506';
        context.fillStyle = value;
        const serialized = String(context.fillStyle);
        if (firstProbe !== serialized) return null;
        const short = /^#([0-9a-f]{6})$/i.exec(serialized);
        if (short) {
          const digits = short[1];
          return {
            r: parseInt(digits.slice(0, 2), 16),
            g: parseInt(digits.slice(2, 4), 16),
            b: parseInt(digits.slice(4, 6), 16),
            a: 1
          };
        }
        const match = /^rgba?\(([^)]*)\)$/i.exec(serialized);
        if (!match) return null;
        const parts = match[1].split(/[,\s/]+/).filter((part) => part.length > 0);
        if (parts.length < 3) return null;
        const channels = parts.slice(0, 3).map((part) => parseFloat(part));
        if (channels.some((channel) => !Number.isFinite(channel))) return null;
        let alpha = 1;
        if (parts.length > 3) {
          const raw = parts[3];
          alpha = raw.endsWith('%') ? parseFloat(raw) / 100 : parseFloat(raw);
          if (!Number.isFinite(alpha)) alpha = 1;
          alpha = Math.min(1, Math.max(0, alpha));
        }
        return {
          r: Math.min(255, Math.max(0, Math.round(channels[0]))),
          g: Math.min(255, Math.max(0, Math.round(channels[1]))),
          b: Math.min(255, Math.max(0, Math.round(channels[2]))),
          a: alpha
        };
      } catch (error) {
        return null;
      }
    }

    function nameForHex(hex) {
      const key = hex.toLowerCase();
      if (!/^#[0-9a-f]{6}$/.test(key)) return null;
      if (namedHexMap === null) {
        namedHexMap = new Map();
        try {
          const context = canvasContext();
          if (context) {
            for (const name of NAMED_COLORS) {
              context.fillStyle = '#010203';
              context.fillStyle = name;
              const value = String(context.fillStyle).toLowerCase();
              if (/^#[0-9a-f]{6}$/.test(value) && !namedHexMap.has(value)) {
                namedHexMap.set(value, name);
              }
            }
          }
        } catch (error) {
          namedHexMap = new Map();
        }
      }
      return namedHexMap.get(key) || null;
    }

    function hexPair(value) {
      return Math.min(255, Math.max(0, Math.round(value))).toString(16).padStart(2, '0');
    }

    function alphaText(alpha) {
      return String(Math.round(alpha * 1000) / 1000);
    }

    function hexText(color) {
      let text = '#' + hexPair(color.r) + hexPair(color.g) + hexPair(color.b);
      if (color.a < 1) text += hexPair(color.a * 255);
      return text;
    }

    function rgbText(color) {
      if (color.a < 1) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${alphaText(color.a)})`;
      }
      return `rgb(${color.r}, ${color.g}, ${color.b})`;
    }

    function hslText(color) {
      const r = color.r / 255;
      const g = color.g / 255;
      const b = color.b / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const lightness = (max + min) / 2;
      let hue = 0;
      let saturation = 0;
      if (max !== min) {
        const delta = max - min;
        saturation = lightness > 0.5
          ? delta / (2 - max - min)
          : delta / (max + min);
        if (max === r) hue = (g - b) / delta + (g < b ? 6 : 0);
        else if (max === g) hue = (b - r) / delta + 2;
        else hue = (r - g) / delta + 4;
        hue /= 6;
      }
      const hDegrees = Math.round(hue * 360) % 360;
      const sPercent = Math.round(saturation * 100);
      const lPercent = Math.round(lightness * 100);
      if (color.a < 1) {
        return `hsla(${hDegrees}, ${sPercent}%, ${lPercent}%, ${alphaText(color.a)})`;
      }
      return `hsl(${hDegrees}, ${sPercent}%, ${lPercent}%)`;
    }

    /** Build the copyable representations shown in the popover. */
    function buildFormats(value, t) {
      const parsed = parseCssColor(value);
      if (!parsed) return [{ key: 'raw', label: t('label.css'), value }];
      const hex = hexText(parsed);
      const rows = [
        { key: 'hex', label: t('label.hex'), value: hex },
        { key: 'rgb', label: t('label.rgb'), value: rgbText(parsed) },
        { key: 'hsl', label: t('label.hsl'), value: hslText(parsed) }
      ];
      const lower = value.trim().toLowerCase();
      const name = parsed.a === 1
        ? (NAMED_COLORS.has(lower) ? lower : nameForHex(hex))
        : null;
      if (name) rows.push({ key: 'name', label: t('label.name'), value: name });
      return rows;
    }

    function translate(locale, key, vars) {
      const dictionary = TEXT[locale] || TEXT.en;
      const template = dictionary[key] || TEXT.en[key] || key;
      return template.replace(/\{(\w+)\}/g, (match, name) => (
        vars && Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
      ));
    }

    function pickLocale(snapshot) {
      const active = snapshot && (snapshot.active || snapshot.locale);
      if (typeof active === 'string' && active.length > 0) {
        return active.toLowerCase().startsWith('zh') ? 'zh' : 'en';
      }
      try {
        return String(navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
      } catch (error) {
        return 'en';
      }
    }

    function readLocaleSnapshot() {
      if (!clientCtx || !clientCtx.locale) return null;
      try {
        return clientCtx.locale.getSnapshot();
      } catch (error) {
        return null;
      }
    }

    function useTranslate() {
      const [snapshot, setSnapshot] = React.useState(readLocaleSnapshot);
      React.useEffect(() => {
        if (!clientCtx || !clientCtx.locale) return undefined;
        let off = null;
        try {
          off = clientCtx.locale.subscribe(() => setSnapshot(readLocaleSnapshot()));
        } catch (error) {
          off = null;
        }
        return () => {
          if (typeof off === 'function') off();
        };
      }, []);
      const locale = pickLocale(snapshot);
      return React.useCallback((key, vars) => translate(locale, key, vars), [locale]);
    }

    async function copyText(text) {
      try {
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(text);
          return true;
        }
      } catch (error) {
        // Fall through to the selection-based copy for restricted contexts.
      }
      let area = null;
      try {
        area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.top = '0';
        area.style.left = '-9999px';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        area.setSelectionRange(0, text.length);
        const copied = document.execCommand('copy');
        area.remove();
        return copied;
      } catch (error) {
        if (area && area.parentNode) area.remove();
        return false;
      }
    }

    function findDot(code) {
      const children = code.children;
      for (let index = 0; index < children.length; index += 1) {
        if (children[index].classList.contains(DOT)) return children[index];
      }
      return null;
    }

    function iconCopy() {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: 14,
        height: 14,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true
      },
        h('rect', { x: 9, y: 9, width: 11, height: 11, rx: 2.4 }),
        h('path', { d: 'M5 15.5V6a2 2 0 0 1 2-2h9.5' })
      );
    }

    function iconCheck(size) {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size || 14,
        height: size || 14,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true
      }, h('path', { d: 'M20 6 9 17l-5-5' }));
    }

    function iconError(size) {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: size || 14,
        height: size || 14,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.8,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true
      },
        h('circle', { cx: 12, cy: 12, r: 9 }),
        h('path', { d: 'M12 7.5v5.5' }),
        h('path', { d: 'M12 16.5h.01' })
      );
    }

    function measurePlacement(popover, element) {
      const dot = popover.dotEl;
      if (!dot || !dot.isConnected) return null;
      const rect = dot.getBoundingClientRect();
      if (rect.bottom < -8 || rect.top > window.innerHeight + 8) return null;
      const width = element.offsetWidth || 296;
      const height = element.offsetHeight || 200;
      const gap = 8;
      const margin = 8;
      let left = rect.left;
      if (left + width > window.innerWidth - margin) {
        left = window.innerWidth - margin - width;
      }
      if (left < margin) left = margin;
      let top = rect.bottom + gap;
      if (top + height > window.innerHeight - margin) {
        const above = rect.top - gap - height;
        top = above >= margin ? above : Math.max(margin, window.innerHeight - margin - height);
      }
      return { left, top };
    }

    function SwatchLayer() {
      const t = useTranslate();
      const tRef = React.useRef(t);
      tRef.current = t;

      const [popover, setPopover] = React.useState(null);
      const [position, setPosition] = React.useState(null);
      const [toast, setToast] = React.useState(null);
      const [copiedKey, setCopiedKey] = React.useState('');

      const popoverElRef = React.useRef(null);
      const popoverStateRef = React.useRef(null);
      popoverStateRef.current = popover;
      const activeDotRef = React.useRef(null);
      activeDotRef.current = popover ? popover.dotEl : null;

      const openTimer = React.useRef(0);
      const closeTimer = React.useRef(0);
      const copiedTimer = React.useRef(0);
      const toastTimer = React.useRef(0);

      const clearTimer = (timer) => {
        if (timer.current) {
          window.clearTimeout(timer.current);
          timer.current = 0;
        }
      };

      const cancelClose = () => {
        clearTimer(openTimer);
        clearTimer(closeTimer);
      };

      const scheduleClose = () => {
        clearTimer(openTimer);
        clearTimer(closeTimer);
        closeTimer.current = window.setTimeout(() => setPopover(null), 220);
      };

      const openFor = (dot) => {
        clearTimer(closeTimer);
        clearTimer(openTimer);
        openTimer.current = window.setTimeout(() => {
          openTimer.current = 0;
          if (!dot.isConnected) return;
          const color = dot.getAttribute(FLAG);
          if (!color) return;
          const current = popoverStateRef.current;
          if (current && current.dotEl === dot) return;
          setPosition(null);
          setPopover({ dotEl: dot, color, formats: buildFormats(color, tRef.current) });
        }, 60);
      };

      const showToast = (kind, message) => {
        clearTimer(toastTimer);
        setToast({ kind, message, id: Date.now() });
        toastTimer.current = window.setTimeout(() => setToast(null), 2000);
      };

      const copyRow = async (row) => {
        const copied = await copyText(row.value);
        if (!copied) {
          showToast('error', t('toast.failed'));
          return;
        }
        setCopiedKey(row.key);
        clearTimer(copiedTimer);
        copiedTimer.current = window.setTimeout(() => setCopiedKey(''), 1400);
        showToast('success', t('toast.copied', { label: row.label, value: row.value }));
      };

      React.useEffect(() => () => {
        clearTimer(openTimer);
        clearTimer(closeTimer);
        clearTimer(copiedTimer);
        clearTimer(toastTimer);
      }, []);

      const applyPosition = (next) => {
        setPosition((current) => (
          current && current.left === next.left && current.top === next.top ? current : next
        ));
      };

      React.useLayoutEffect(() => {
        if (!popover) {
          setPosition(null);
          return;
        }
        const element = popoverElRef.current;
        if (!element) return;
        const next = measurePlacement(popover, element);
        if (!next) {
          setPopover(null);
          return;
        }
        applyPosition(next);
      }, [popover]);

      React.useEffect(() => {
        if (!popover) return undefined;
        let frame = 0;
        const update = () => {
          frame = 0;
          const element = popoverElRef.current;
          const current = popoverStateRef.current;
          if (!element || !current) return;
          const next = measurePlacement(current, element);
          if (!next) {
            setPopover(null);
            return;
          }
          applyPosition(next);
        };
        const schedule = () => {
          if (frame === 0) frame = window.requestAnimationFrame(update);
        };
        window.addEventListener('scroll', schedule, true);
        window.addEventListener('resize', schedule);
        return () => {
          window.removeEventListener('scroll', schedule, true);
          window.removeEventListener('resize', schedule);
          if (frame !== 0) window.cancelAnimationFrame(frame);
        };
      }, [popover]);

      React.useEffect(() => {
        if (typeof document === 'undefined' || !document.body) return undefined;

        const pending = new Set();
        let frame = 0;

        const clear = (code) => {
          code.removeAttribute(FLAG);
          code.style.removeProperty('--dsh-color-swatch');
          const dot = findDot(code);
          if (dot) dot.remove();
        };

        const inspect = (code) => {
          if (!code || !code.isConnected || code.tagName !== 'CODE') return;
          const eligible = !code.closest('pre')
            && code.querySelector('button') === null
            && code.closest('[data-chat-flow-kind]') !== null;
          if (!eligible) {
            clear(code);
            return;
          }
          const color = normalizeColor(code.textContent || '');
          if (color === null) {
            clear(code);
            return;
          }
          let dot = findDot(code);
          if (!dot) {
            dot = document.createElement('span');
            dot.className = DOT;
            dot.setAttribute('aria-hidden', 'true');
            dot.setAttribute(FLAG, color);
          }
          if (code.firstChild !== dot) code.insertBefore(dot, code.firstChild);
          if (code.getAttribute(FLAG) !== color) code.setAttribute(FLAG, color);
          if (dot.getAttribute(FLAG) !== color) dot.setAttribute(FLAG, color);
          code.style.setProperty('--dsh-color-swatch', color);
        };

        const schedule = () => {
          if (frame !== 0) return;
          frame = window.requestAnimationFrame(() => {
            frame = 0;
            const batch = Array.from(pending);
            pending.clear();
            for (const code of batch) inspect(code);
          });
        };

        const collect = (node) => {
          if (!node || node.nodeType !== 1) return;
          if (node.tagName === 'CODE') pending.add(node);
          const codes = node.querySelectorAll ? node.querySelectorAll('code') : [];
          for (const code of codes) pending.add(code);
        };

        const observer = new MutationObserver((records) => {
          for (const record of records) {
            if (record.type === 'characterData') {
              const parent = record.target.parentElement;
              const owner = parent && parent.closest('code');
              if (owner) pending.add(owner);
              continue;
            }
            const target = record.target;
            if (target && target.nodeType === 1) {
              const owner = target.closest ? target.closest('code') : null;
              if (owner) pending.add(owner);
            }
            for (const node of record.addedNodes) collect(node);
          }
          if (activeDotRef.current && !activeDotRef.current.isConnected) {
            setPopover(null);
          }
          if (pending.size > 0) schedule();
        });

        observer.observe(document.body, {
          subtree: true,
          childList: true,
          characterData: true
        });

        const onPointerOver = (event) => {
          const target = event.target;
          if (!target || typeof target.closest !== 'function') return;
          const dot = target.closest(DOT_SELECTOR);
          if (!dot || !dot.isConnected) return;
          if (event.relatedTarget && dot.contains(event.relatedTarget)) return;
          openFor(dot);
        };

        const onPointerOut = (event) => {
          const target = event.target;
          if (!target || typeof target.closest !== 'function') return;
          const dot = target.closest(DOT_SELECTOR);
          if (!dot) return;
          if (event.relatedTarget && dot.contains(event.relatedTarget)) return;
          scheduleClose();
        };

        const onPointerDown = (event) => {
          const target = event.target;
          if (!target || typeof target.closest !== 'function') return;
          if (target.closest(POPOVER_SELECTOR)) return;
          if (target.closest(DOT_SELECTOR)) return;
          clearTimer(openTimer);
          clearTimer(closeTimer);
          setPopover(null);
        };

        const onKeyDown = (event) => {
          if (event.key === 'Escape') setPopover(null);
        };

        document.addEventListener('pointerover', onPointerOver, true);
        document.addEventListener('pointerout', onPointerOut, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown);

        for (const code of document.querySelectorAll('[data-chat-flow-kind] code')) {
          pending.add(code);
        }
        if (pending.size > 0) schedule();

        return () => {
          observer.disconnect();
          document.removeEventListener('pointerover', onPointerOver, true);
          document.removeEventListener('pointerout', onPointerOut, true);
          document.removeEventListener('pointerdown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown);
          if (frame !== 0) window.cancelAnimationFrame(frame);
          for (const code of document.querySelectorAll('code[' + FLAG + ']')) clear(code);
        };
      }, []);

      const popoverNode = popover ? h('div', {
        ref: popoverElRef,
        className: 'dsh-color-popover',
        role: 'dialog',
        'aria-label': t('popover.title'),
        style: position
          ? { left: position.left + 'px', top: position.top + 'px' }
          : { left: '0px', top: '0px', visibility: 'hidden' },
        onPointerEnter: cancelClose,
        onPointerLeave: scheduleClose
      },
        h('div', { className: 'dsh-color-popover-head' },
          h('span', {
            className: 'dsh-color-chip',
            style: { background: popover.color },
            'aria-hidden': true
          }),
          h('div', { className: 'dsh-color-popover-copy' },
            h('div', { className: 'dsh-color-popover-title' }, t('popover.title')),
            h('div', { className: 'dsh-color-popover-hint' }, t('popover.hint'))
          )
        ),
        h('div', { className: 'dsh-color-rows' },
          popover.formats.map((row) => h('button', {
            key: row.key,
            type: 'button',
            className: 'dsh-color-row' + (copiedKey === row.key ? ' is-copied' : ''),
            onClick: () => { copyRow(row); }
          },
            h('span', { className: 'dsh-color-row-label' }, row.label),
            h('span', { className: 'dsh-color-row-value' }, row.value),
            h('span', { className: 'dsh-color-row-icon', 'aria-hidden': true },
              copiedKey === row.key ? iconCheck() : iconCopy()
            )
          ))
        )
      ) : null;

      const toastNode = toast ? h('div', {
        key: toast.id,
        className: 'dsh-color-toast' + (toast.kind === 'error' ? ' is-error' : ''),
        role: 'status',
        'aria-live': 'polite'
      },
        toast.kind === 'error' ? iconError(15) : iconCheck(15),
        h('span', null, toast.message)
      ) : null;

      return h(React.Fragment, null,
        h('style', {
          'data-color-swatch': 'style',
          dangerouslySetInnerHTML: { __html: STYLES }
        }),
        popoverNode,
        toastNode
      );
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        clientCtx = ctx;
        ctx.effect(
          () => ctx.locale.register(NS, TEXT),
          'color swatch: popover copy'
        );
        ctx.slots.inject('shell.overlay', () => ctx.slots.register({
          name: 'shell.overlay',
          id: 'color-swatch',
          order: 900,
          label: 'Color swatch dots'
        }, SwatchLayer));
      }
    };
  }
});
