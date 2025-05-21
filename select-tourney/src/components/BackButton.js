import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="ts-back-button ms-3 mt-3">
      <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default BackButton;
