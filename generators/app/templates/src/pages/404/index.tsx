import { Exception404 } from '@/components';

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Exception404 />
    </div>
  );
};

export default NotFoundPage;
