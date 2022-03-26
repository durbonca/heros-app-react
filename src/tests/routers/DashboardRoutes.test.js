import { DashboardRoutes } from "../../components/routers/DashboardRoutes";
import { AuthContext } from "../../auth/authContext";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";


describe("<DashboardRoutes />", () => {

    const contextValue = {
        user: {
            logged: true,
            name: "juan"
        }
    }

    test('debe de mostrarse correctamente - Marvel', () => {

        const wrapper = mount(  
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </ AuthContext.Provider>
            );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('juan');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen');
    });

    test('debe mostrar correctamente otra vista - DC', () => {
        const wrapper = mount(  
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRoutes />
                </MemoryRouter>
            </ AuthContext.Provider>
            );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Dc Screen');
    })
})