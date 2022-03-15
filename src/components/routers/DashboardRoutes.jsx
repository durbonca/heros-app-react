import { Routes, Route } from 'react-router-dom';
import { DcScreen } from '../dc/DcScreen';
import { HeroScreen } from '../hero/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from '../ui/Navbar';

export const DashboardRoutes = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
          <Routes>
              <Route path="/" element={<MarvelScreen />} />
              <Route path="/marvel" element={<MarvelScreen />} />
              <Route path="/dc" element={<DcScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/hero/:id" element={<HeroScreen />} />
          </Routes>
        </div>
    </div>
  )
}
