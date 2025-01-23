// screens/MainPage/MainPage.tsx
import { Button } from '../../components/Action/Button';
import { Layout } from '../../Containers/Layout/Layout';
import { Section } from '../../Containers/Section/Section';
import { MainData } from '../../api/MainPage';
import { ButtonLink } from '../../ui';

type MainPageProps = {
	data: MainData | null;
	error: string | null;
};

 const footerSettings = { columns: [] };
 const headerSettings = { menu: [] };

export const MainPage: React.FC<MainPageProps> = ({data,error}) => {
	return (
		<Layout headerSettings={headerSettings} footerSettings={footerSettings}>
			<Section>
				<ButtonLink href={'/login'}>Логин</ButtonLink>
				<ButtonLink href={'/register'}>Регистрация</ButtonLink>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

