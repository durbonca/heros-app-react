import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { types } from "../../../types";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { mount } from "enzyme";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe("LoginScreen test", () => {

    const userContext = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }}

    const wrapper = mount(
        <AuthContext.Provider value={userContext}>
            <MemoryRouter initialEntries={['/login']} >
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
        );

        const handleClick = wrapper.find("button").prop('onClick');

    test('should match snapshot', () => { 
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("button").text()).toBe('login');
     })

     test('should call dipatch and navigate', () => {
        handleClick();
        // dispatch(...{name: 'usuario'})
        expect(userContext.dispatch).toHaveBeenCalledWith({ 
            type: types.login , 
            payload: { name: 'usuario' } 
        });
        // mockNavigate = (/ ,{repace: true} )
        expect(mockNavigate).toHaveBeenCalledWith("/", { replace: true }); 
     })

     test('should dispatch last route', () => {
        // localstorage.setItem('lastPath', '/dc')
        localStorage.setItem('lastPath', '/dc')     
        // handleClick
        handleClick();
        // mockNavidate... ('dc', {replace: true})
        expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
     })
})