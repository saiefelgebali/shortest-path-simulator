import SidebarContainer from "./components/SidebarContainer/SidebarContainer";
import DiagramContainer from "./components/DiagramContainer/DiagramContainer";
import MenubarContainer from "./components/MenubarContainer/MenubarContainer";
import Layout from "./layout/Layout";
import MenuLayout from "./layout/MenuLayout";
import UserLayout from "./layout/UserLayout";

function App() {
	return (
		<Layout>
			<MenuLayout>
				<MenubarContainer></MenubarContainer>
			</MenuLayout>

			<UserLayout>
				<SidebarContainer></SidebarContainer>
				<DiagramContainer></DiagramContainer>
				<SidebarContainer></SidebarContainer>
			</UserLayout>
		</Layout>
	);
}

export default App;
