import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div>{ t('titles_notFound') }</div>
  );
};

export default NotFound;
