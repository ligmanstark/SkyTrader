import { TGoods } from '../../store/slices/types/TGoods';
const searchID = (data: any, searchName = '') => {
	const found = data.find(
		(e: TGoods) => e.title.toLowerCase() === searchName.toLowerCase()
	);

	if (!found) {
		const found = data.find(
			(e: TGoods) => e.description.toLowerCase() === searchName.toLowerCase()
		);
		return found;
	} else return found;
};

export { searchID };
