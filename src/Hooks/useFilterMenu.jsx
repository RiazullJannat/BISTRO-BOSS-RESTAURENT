import useMenu from "./useMenu";


const useFilterMenu = (category) => {
    const [menu]=useMenu();
    const filteredMenu = menu.filter(item=> item.category === category)
    console.log(filteredMenu)
    return filteredMenu
};

export default useFilterMenu;