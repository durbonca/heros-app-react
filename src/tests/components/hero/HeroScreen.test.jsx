import { Routes, Route, MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('<HeroScreen> tests',()=>{
    
    test("shouldn't show hero if is not hero on URL", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>No hero page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('No hero page');

    })

    test("should to show hero if is hero on URL", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h3').text().trim()).toBe('Wonder Woman');

    })

    test("should to return to back screen", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/dc-wonder']}>
                <Routes>
                    <Route path="/hero/:id" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(mockNavigate).toHaveBeenCalledWith( -1, { replace: true } ); 
    })

})