
import React, { useState, useMemo, useCallback, memo, useRef, useEffect } from 'react';
import { Language, Category, Place, Translation } from './types';
import { INITIAL_PLACES, UI_TRANSLATIONS } from './constants';

// --- Configuration ---
const PASSWORD_CORRECT = "1234";
const STORAGE_KEY = 'cde_elite_places';

// --- Components ---

const Notification = ({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-top duration-500">
      <div className={`px-8 py-4 rounded-full shadow-2xl backdrop-blur-xl border ${type === 'success' ? 'bg-zinc-900/90 border-amber-500/50 text-amber-500' : 'bg-red-950/90 border-red-500/50 text-red-200'} text-xs font-bold uppercase tracking-[0.2em]`}>
        {message}
      </div>
    </div>
  );
};

const LanguageSwitcher = memo(({ current, onChange }: { current: Language, onChange: (l: Language) => void }) => {
  return (
    <div className="flex gap-6">
      {(['es', 'en', 'pt'] as Language[]).map(lang => (
        <button
          key={lang}
          onClick={() => onChange(lang)}
          className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${current === lang ? 'text-amber-500 scale-110 translate-y-[-2px]' : 'text-zinc-600 hover:text-zinc-300'}`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
});

const PlaceCard = memo(({ place, lang, onDetail, isAdmin, onEdit, onDelete }: { 
  place: Place, 
  lang: Language, 
  onDetail: (p: Place) => void,
  isAdmin: boolean,
  onEdit: (p: Place) => void,
  onDelete: (id: string) => void
}) => {
  const t = place.translations[lang];
  const ui = UI_TRANSLATIONS[lang];
  return (
    <div className="group relative will-change-transform">
      <div 
        onClick={() => onDetail(place)}
        className="relative overflow-hidden bg-zinc-900/40 border border-zinc-800/30 rounded-2xl cursor-pointer transition-all duration-700 hover:border-amber-500/40 hover:shadow-[0_0_50px_rgba(245,158,11,0.05)]"
      >
        <div className="aspect-[4/5] overflow-hidden bg-zinc-800 relative">
          <img 
            src={place.image} 
            alt={t.name} 
            loading="lazy"
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity"></div>
          
          <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-amber-500 text-[8px] font-bold tracking-[0.5em] uppercase mb-3 opacity-80">{ui.categories[place.category]}</p>
            <h3 className="text-2xl font-bold text-white tracking-tighter mb-2 leading-tight">{t.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-amber-500/80 text-xs tracking-tighter font-bold serif italic">★ {place.rating}</span>
              <span className="text-zinc-500 text-[10px] font-mono tracking-widest">{Array(place.priceLevel).fill('$').join('')}</span>
            </div>
          </div>
        </div>
      </div>

      {isAdmin && (
        <div className="absolute top-6 right-6 flex flex-col gap-3 z-20 animate-in fade-in slide-in-from-right-4 duration-500">
          <button 
            onClick={(e) => { e.stopPropagation(); onEdit(place); }}
            className="bg-black/80 text-amber-500 p-3.5 rounded-full hover:bg-amber-500 hover:text-black shadow-2xl backdrop-blur-md transition-all active:scale-90 border border-amber-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onDelete(place.id); }}
            className="bg-black/80 text-red-500 p-3.5 rounded-full hover:bg-red-600 hover:text-white shadow-2xl backdrop-blur-md transition-all active:scale-90 border border-red-500/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
    </div>
  );
});

const LoginModal = ({ isOpen, onClose, onLogin, lang }: { isOpen: boolean, onClose: () => void, onLogin: () => void, lang: Language }) => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setPass('');
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === PASSWORD_CORRECT) {
      onLogin();
      onClose();
    } else {
      setError(true);
      setPass('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[2.5rem] w-full max-w-sm shadow-[0_0_150px_rgba(245,158,11,0.15)] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        <div className="w-20 h-20 bg-amber-500/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20 text-amber-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3 tracking-widest uppercase">Elite Auth</h2>
        <p className="text-zinc-500 text-[10px] mb-10 tracking-[0.3em] uppercase">{lang === 'pt' ? 'Senha do Administrador' : 'Clave de Administrador'}</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            ref={inputRef}
            type="password"
            value={pass}
            onChange={(e) => { setPass(e.target.value); setError(false); }}
            placeholder="••••"
            className={`w-full bg-black/50 border ${error ? 'border-red-500' : 'border-zinc-800'} rounded-2xl p-5 text-center text-3xl tracking-[0.8em] text-amber-500 focus:border-amber-500 outline-none transition-all shadow-inner`}
          />
          {error && <p className="text-red-500 text-[9px] uppercase font-bold tracking-[0.4em] animate-pulse">Acceso Denegado</p>}
          <div className="flex flex-col gap-4 pt-4">
            <button type="submit" className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-lg active:scale-[0.98]">Confirmar</button>
            <button type="button" onClick={onClose} className="w-full py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600 hover:text-zinc-400 transition-colors">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PlaceEditorModal = ({ place, lang, onSave, onClose }: { 
  place: Partial<Place> | null, 
  lang: Language, 
  onSave: (p: Place) => void, 
  onClose: () => void 
}) => {
  if (!place) return null;
  const ui = UI_TRANSLATIONS[lang];
  const [formData, setFormData] = useState<Place>({
    id: place.id || Math.random().toString(36).substring(2, 11),
    category: place.category || Category.RESTAURANTS,
    rating: place.rating || 5.0,
    priceLevel: place.priceLevel || 3,
    image: place.image || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    translations: place.translations || {
      es: { name: '', description: '', address: '' },
      en: { name: '', description: '', address: '' },
      pt: { name: '', description: '', address: '' }
    },
    contact: place.contact || '',
    whatsapp: place.whatsapp || '',
    email: place.email || '',
    mapUrl: place.mapUrl || ''
  });

  const handleTransChange = (l: Language, field: keyof Translation, val: string) => {
    setFormData(prev => ({
      ...prev,
      translations: {
        ...prev.translations,
        [l]: { ...prev.translations[l], [field]: val }
      }
    }));
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl my-8 animate-in zoom-in duration-500">
        <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-zinc-800/10">
          <div>
            <h2 className="text-xl font-bold text-amber-500 tracking-[0.4em] uppercase mb-1">Editor de Curaduría</h2>
            <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em]">ELITE PY Administrative Panel</p>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors bg-black/50 p-3 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-12 max-h-[65vh] overflow-y-auto custom-scrollbar">
          <div className="lg:col-span-4 space-y-10">
            <section className="space-y-6">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] border-b border-zinc-800 pb-4">Multimedia & Clasificación</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[8px] uppercase tracking-[0.3em] text-zinc-500 mb-2 font-bold">Imagen Principal (URL)</label>
                  <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none transition-all shadow-inner"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.3em] text-zinc-500 mb-2 font-bold">Categoría</label>
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as Category})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none cursor-pointer appearance-none">
                      {Object.values(Category).map(cat => (
                        <option key={cat} value={cat}>{ui.categories[cat]}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[8px] uppercase tracking-[0.3em] text-zinc-500 mb-2 font-bold">Rango Precio</label>
                    <select value={formData.priceLevel} onChange={e => setFormData({...formData, priceLevel: Number(e.target.value) as any})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none appearance-none">
                        <option value={1}>$ (Económico)</option>
                        <option value={2}>$$ (Medio)</option>
                        <option value={3}>$$$ (Lujo)</option>
                        <option value={4}>$$$$ (Elite)</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
               <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] border-b border-zinc-800 pb-4">Conectividad</h3>
               <div className="space-y-4">
                 <input placeholder="Teléfono de Contacto" type="text" value={formData.contact} onChange={e => setFormData({...formData, contact: e.target.value})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
                 <input placeholder="WhatsApp (Ej: 5959...)" type="text" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
                 <input placeholder="Correo Electrónico" type="text" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
                 <input placeholder="Google Maps URL" type="text" value={formData.mapUrl} onChange={e => setFormData({...formData, mapUrl: e.target.value})} className="w-full bg-black/40 border border-zinc-800 rounded-2xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
               </div>
            </section>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] border-b border-zinc-800 pb-4">Contenido Multilingüe</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(['es', 'pt', 'en'] as Language[]).map(l => (
                <div key={l} className="p-8 bg-black/40 border border-zinc-800/50 rounded-[2rem] space-y-5 flex flex-col">
                  <h4 className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.6em] mb-4 flex items-center justify-center gap-3">
                    <span className="w-2 h-[1px] bg-amber-500/30"></span> {l} <span className="w-2 h-[1px] bg-amber-500/30"></span>
                  </h4>
                  <input placeholder="Nombre" type="text" value={formData.translations[l].name} onChange={e => handleTransChange(l, 'name', e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
                  <textarea placeholder="Descripción Larga" rows={6} value={formData.translations[l].description} onChange={e => handleTransChange(l, 'description', e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-white focus:border-amber-500 outline-none resize-none flex-grow"/>
                  <input placeholder="Dirección / Local" type="text" value={formData.translations[l].address} onChange={e => handleTransChange(l, 'address', e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-white focus:border-amber-500 outline-none"/>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 border-t border-zinc-800 flex gap-6 bg-zinc-800/5">
          <button onClick={() => onSave(formData)} className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-bold py-6 rounded-2xl transition-all uppercase tracking-[0.4em] text-[10px] shadow-2xl active:scale-[0.98]">
            {ui.labels.save}
          </button>
          <button onClick={onClose} className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-bold py-6 rounded-2xl transition-all uppercase tracking-[0.4em] text-[10px] active:scale-[0.98]">
            {ui.labels.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailModal = memo(({ place, lang, onClose }: { place: Place | null, lang: Language, onClose: () => void }) => {
  if (!place) return null;
  const t = place.translations[lang];
  const ui = UI_TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/98 backdrop-blur-md overflow-y-auto animate-in fade-in duration-700">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-3xl rounded-[3rem] overflow-hidden shadow-[0_0_150px_rgba(0,0,0,1)] animate-in zoom-in slide-in-from-bottom-20 duration-700 my-8">
        <div className="relative h-80 sm:h-[550px] bg-zinc-800 group/img">
          <img src={place.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-[3s] group-hover/img:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
          <button onClick={onClose} className="absolute top-8 right-8 bg-black/50 text-white p-4 rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-xl border border-white/10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="px-12 pb-16 -mt-24 relative z-10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 mb-10">
            <div className="max-w-full sm:max-w-[70%]">
              <p className="text-amber-500 text-[10px] font-bold tracking-[0.6em] uppercase mb-4 opacity-70">{ui.categories[place.category]}</p>
              <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter leading-none">{t.name}</h2>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-amber-500 text-4xl font-bold mb-2 serif italic tracking-tighter shadow-amber-500/20 drop-shadow-md">★ {place.rating}</div>
              <div className="text-zinc-500 font-mono text-xs tracking-[0.3em]">{Array(place.priceLevel).fill('$').join('')}</div>
            </div>
          </div>
          
          <div className="text-zinc-300 text-xl mb-12 leading-relaxed font-light serif italic border-l-0 sm:border-l-2 border-amber-500/30 pl-0 sm:pl-8 mx-auto sm:mx-0 max-w-2xl">
            {t.description}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-3xl bg-black/40 border border-zinc-800/50 group/addr">
                  <div className="w-10 h-10 rounded-full bg-amber-500/5 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/10 group-hover/addr:bg-amber-500 group-hover/addr:text-black transition-all">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-zinc-200 text-sm font-medium mb-2 leading-snug">{t.address}</p>
                    {place.mapUrl && (
                      <a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">
                        {ui.labels.viewMap} →
                      </a>
                    )}
                  </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
              {place.contact && (
                <a href={`tel:${place.contact.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-4 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-100 px-8 py-5 rounded-2xl text-[10px] font-bold tracking-[0.4em] uppercase transition-all border border-zinc-700/20 active:scale-95">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {ui.labels.call}
                </a>
              )}
              {place.whatsapp && (
                <a href={`https://wa.me/${place.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-100 px-8 py-5 rounded-2xl text-[10px] font-bold tracking-[0.4em] uppercase transition-all border border-zinc-700/20 active:scale-95">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [places, setPlaces] = useState<Place[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_PLACES;
  });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [editingPlace, setEditingPlace] = useState<Partial<Place> | null>(null);
  const [notification, setNotification] = useState<{msg: string, type: 'success' | 'error'} | null>(null);

  const ui = UI_TRANSLATIONS[lang];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(places));
  }, [places]);

  const handleAdminToggle = useCallback(() => {
    if (isAdmin) {
      setIsAdmin(false);
      setNotification({ msg: lang === 'pt' ? "Sessão encerrada" : "Sesión cerrada", type: 'success' });
    } else {
      setIsLoginModalOpen(true);
    }
  }, [isAdmin, lang]);

  const savePlace = (p: Place) => {
    setPlaces(prev => {
      const exists = prev.find(item => item.id === p.id);
      if (exists) {
        return prev.map(item => item.id === p.id ? p : item);
      }
      return [p, ...prev];
    });
    setEditingPlace(null);
    setNotification({ msg: lang === 'pt' ? "Local salvo com sucesso!" : "¡Lugar guardado con éxito!", type: 'success' });
  };

  const deletePlace = useCallback((id: string) => {
    const confirmMsg = lang === 'pt' ? "Excluir permanentemente?" : lang === 'en' ? "Delete permanently?" : "¿Eliminar permanentemente?";
    if (confirm(confirmMsg)) {
      setPlaces(prev => prev.filter(p => p.id !== id));
      setNotification({ msg: lang === 'pt' ? "Local removido" : "Lugar eliminado", type: 'success' });
    }
  }, [lang]);

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'all') return places;
    return places.filter(p => p.category === activeCategory);
  }, [activeCategory, places]);

  return (
    <div className="min-h-screen pb-20 bg-[#050505] text-zinc-100 selection:bg-amber-500/30 antialiased overflow-x-hidden">
      {notification && <Notification message={notification.msg} type={notification.type} onClose={() => setNotification(null)} />}
      
      {/* Header */}
      <header className="relative py-48 sm:py-64 px-6 overflow-hidden border-b border-zinc-900 bg-[url('https://images.unsplash.com/photo-1549415653-f7256561f008?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-fixed bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/95 to-[#050505]"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="text-center md:text-left animate-in fade-in slide-in-from-bottom-10 duration-1000">
            {isAdmin && (
               <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-[0.5em] uppercase rounded-full mb-8 border border-amber-500/20 backdrop-blur-md">
                 <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(245,158,11,1)]"></span>
                 Console Administrator
               </div>
            )}
            <h1 className="text-8xl sm:text-[180px] font-bold tracking-tighter text-white mb-8 leading-[0.8] select-none">ELITE<br/>PY</h1>
            <p className="text-amber-500 text-sm md:text-2xl font-light tracking-[0.6em] uppercase serif ml-3 opacity-90">{ui.subtitle}</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-20">
            <LanguageSwitcher current={lang} onChange={setLang} />
            <button 
              onClick={handleAdminToggle}
              className={`text-[10px] tracking-[0.5em] transition-all uppercase px-12 py-5 border rounded-full select-none active:scale-95 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${isAdmin ? 'bg-amber-600 text-white border-amber-600 font-bold' : 'text-zinc-500 border-zinc-800 hover:text-white hover:border-zinc-500'}`}
            >
              {isAdmin ? 'TERMINAR SESIÓN' : ui.labels.admin}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation / Filter */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-2xl border-b border-zinc-900/50 shadow-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row justify-between items-center gap-10">
          <ul className="flex items-center gap-12 overflow-x-auto no-scrollbar py-2 w-full lg:w-auto">
            <li>
              <button 
                onClick={() => setActiveCategory('all')}
                className={`text-[10px] font-bold tracking-[0.5em] uppercase transition-all pb-3 border-b-2 outline-none ${activeCategory === 'all' ? 'text-amber-500 border-amber-500' : 'text-zinc-700 border-transparent hover:text-zinc-300'}`}
              >
                {lang === 'es' ? 'TODO' : lang === 'en' ? 'ALL' : 'TUDO'}
              </button>
            </li>
            {(Object.values(Category)).map(cat => (
              <li key={cat}>
                <button 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] font-bold tracking-[0.5em] uppercase transition-all pb-3 border-b-2 outline-none whitespace-nowrap ${activeCategory === cat ? 'text-amber-500 border-amber-500' : 'text-zinc-700 border-transparent hover:text-zinc-300'}`}
                >
                  {ui.categories[cat]}
                </button>
              </li>
            ))}
          </ul>
          
          {isAdmin && (
            <button 
              onClick={() => setEditingPlace({})}
              className="bg-white text-black px-10 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-amber-500 active:scale-95 flex items-center gap-3 w-full lg:w-auto justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
              {ui.labels.addPlace}
            </button>
          )}
        </nav>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {filteredPlaces.map((place) => (
            <PlaceCard 
              key={place.id}
              place={place} 
              lang={lang} 
              isAdmin={isAdmin}
              onDetail={setSelectedPlace} 
              onEdit={setEditingPlace}
              onDelete={deletePlace}
            />
          ))}
        </div>
        
        {filteredPlaces.length === 0 && (
          <div className="text-center py-64 border border-zinc-900/30 rounded-[3rem] bg-zinc-900/5 backdrop-blur-sm">
            <p className="text-zinc-800 text-6xl font-light italic serif tracking-tighter opacity-50">Empty Boutique Collection.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-48 py-48 px-6 border-t border-zinc-950 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10"></div>
        <div className="relative z-10">
          <div className="mb-16 flex justify-center gap-12">
              <div className="w-1.5 h-1.5 bg-amber-500/20 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-amber-500/20 rounded-full"></div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-8 italic serif tracking-tighter">Elite Paraguay</h2>
          <p className="text-zinc-700 text-[10px] tracking-[1em] uppercase leading-loose max-w-sm mx-auto opacity-60">
            Exclusive access to the finest destinations in Paraguay.
          </p>
          <div className="mt-20 pt-20 border-t border-zinc-900/50">
             <p className="text-[9px] text-zinc-800 font-bold uppercase tracking-[0.5em]">Reserved for the Sophisticated Traveler &copy; 2025</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DetailModal 
        place={selectedPlace} 
        lang={lang} 
        onClose={() => setSelectedPlace(null)} 
      />
      
      <PlaceEditorModal 
        place={editingPlace}
        lang={lang}
        onSave={savePlace}
        onClose={() => setEditingPlace(null)}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={() => {
          setIsAdmin(true);
          setNotification({ msg: lang === 'pt' ? "Bem-vindo Administrador" : "Bienvenido Administrador", type: 'success' });
        }}
        lang={lang}
      />
    </div>
  );
}