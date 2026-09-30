import { MapPin, Calendar, BedDouble, ArrowRight, Sparkles } from "lucide-react";

export interface SearchFilterState {
  location: string;
  checkInDate: string;
  roomType: string;
}

interface SearchFilterProps {
  searchFilter: SearchFilterState;
  setSearchFilter: React.Dispatch<React.SetStateAction<SearchFilterState>>;
}

export function SearchFilter({ searchFilter, setSearchFilter }: SearchFilterProps) {
  return (
    <div className="relative z-30 w-full max-w-[1150px] mx-auto px-6 -py-4">
      {/* Outer Card Wrapper with Rounded Pill Shape & Promo Banner */}
      <div className="relative shadow-2xl rounded-[40px] overflow-hidden bg-[#2a2927]">
        {/* Main White Pill Container */}
        <div className="bg-white rounded-[36px] p-3 sm:p-4 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-md">
          {/* Location Field */}
          <div className="flex-1 w-full flex items-center px-4 py-2 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
            <MapPin className="w-7 h-7 text-primary shrink-0 mr-3.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1 min-w-0">
              <label
                className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
                htmlFor="search-destination"
              >
                Hostel Location
              </label>
              <select
                className="w-full bg-transparent text-base text-slate-900 font-bold focus:outline-none cursor-pointer truncate appearance-none"
                id="search-destination"
                value={searchFilter.location}
                onChange={(e) =>
                  setSearchFilter({
                    ...searchFilter,
                    location: e.target.value,
                  })
                }
              >
                <option value="all">All Hostels (Kochi)</option>
                <option value="premier">Saiyoojyam Premier (Painakkil Jn)</option>
                <option value="annex">Saiyoojyam Annex (Kuzhikkattumoola)</option>
                <option value="towers">Saiyoojyam Towers 1 & 2</option>
              </select>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-slate-200" />

          {/* Check-in Date Field */}
          <div className="flex-1 w-full flex items-center px-4 py-2 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
            <Calendar className="w-7 h-7 text-primary shrink-0 mr-3.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1 min-w-0">
              <label
                className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
                htmlFor="check-in-date"
              >
                Check-in Date
              </label>
              <input
                className="w-full bg-transparent text-base text-slate-900 font-bold focus:outline-none cursor-pointer"
                id="check-in-date"
                type="date"
                value={searchFilter.checkInDate}
                onChange={(e) =>
                  setSearchFilter({
                    ...searchFilter,
                    checkInDate: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-[1px] h-10 bg-slate-200" />

          {/* Room Type Field */}
          <div className="flex-1 w-full flex items-center px-4 py-2 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
            <BedDouble className="w-7 h-7 text-primary shrink-0 mr-3.5 group-hover:scale-110 transition-transform" />
            <div className="flex-1 min-w-0">
              <label
                className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider"
                htmlFor="guests-count"
              >
                Room Type
              </label>
              <select
                className="w-full bg-transparent text-base text-slate-900 font-bold focus:outline-none cursor-pointer truncate appearance-none"
                id="guests-count"
                value={searchFilter.roomType}
                onChange={(e) =>
                  setSearchFilter({
                    ...searchFilter,
                    roomType: e.target.value,
                  })
                }
              >
                <option value="1">1 Bed · AC / Non-AC</option>
                <option value="2">2-Sharing · Attached Bath</option>
                <option value="3">3-Sharing · Spacious Work Desk</option>
                <option value="4">Single Private Room · AC</option>
              </select>
            </div>
          </div>

          {/* Search CTA Pill Button */}
          <div className="w-full lg:w-auto shrink-0 flex items-center justify-end">
            <button
              className="w-full lg:w-auto h-14 bg-primary hover:bg-primary-container text-white font-bold text-lg rounded-full shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98] px-8"
              id="search-cta"
              type="button"
            >
              <span>Search</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Dark Banner with Star Badge */}
        <div className="bg-[#2a2927] text-white px-6 py-3 flex items-center justify-center text-center gap-2 text-xs sm:text-sm font-semibold tracking-wide">
          <span className="p-1 rounded-md bg-amber-400 text-slate-950 font-bold inline-flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
          </span>
          <span>
            Homely meals, 24/7 biometric security & high-speed Wi-Fi near Infopark & SmartCity Kakkanad*
          </span>
        </div>
      </div>
    </div>
  );
}
