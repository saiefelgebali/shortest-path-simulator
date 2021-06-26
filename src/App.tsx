import Layout from "./layout/Layout";
import SidebarContainer from "./components/SidebarContainer/SidebarContainer";
import MenubarContainer from "./components/MenubarContainer/MenubarContainer";
import DiagramView from "./components/DiagramView/DiagramView";

function App() {
	return (
		<Layout>
			<MenubarContainer></MenubarContainer>

			<SidebarContainer></SidebarContainer>
			<DiagramView />
			<SidebarContainer></SidebarContainer>
		</Layout>
	);
}

export default App;
