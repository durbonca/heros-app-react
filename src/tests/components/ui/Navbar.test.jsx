import { AuthContext } from "../../../auth/authContext";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types";
import { mount } from "enzyme";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe("<Navbar /> test component", () => {

    const userContext = {
        user: {
            name: "Pedro",
            logged: true
        },
        dispatch: jest.fn()
    }

    // Pedro
    const wrapper = mount(
        <AuthContext.Provider value={userContext}>
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>)

    test('debe de mostrarse correctamente', () => {
        // Snapshot
        expect(wrapper).toMatchSnapshot()
        // .text-info ... Pedro
        expect(wrapper.find(".text-info").text()).toBe("Pedro")
    })

    test('debe de llamar el logout, llamar el navigate y el dispatch con los argumentos', () => {
        wrapper.find("button").simulate("click")
        expect( mockNavigate ).toHaveBeenCalledWith('/login', { replace: true });
        expect(userContext.dispatch).toHaveBeenCalledWith({ type: types.logout })
    })

})