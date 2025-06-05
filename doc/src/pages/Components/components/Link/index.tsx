import { useNavigate } from 'react-router-dom';

export const Link = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  const navigate = useNavigate();

  return (
    <span
      style={{
        color: '#1677ff',
        cursor: href ? 'pointer' : 'auto',
      }}
      onClick={() => {
        if (href) {
          navigate(href);
        }
      }}
    >
      {children}
    </span>
  );
};
