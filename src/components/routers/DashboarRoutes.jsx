import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../hero/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from '../ui/Navbar';

export const DashboarRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/hero" element={<HeroScreen />} />
        </Routes>
    </div>
  )
}