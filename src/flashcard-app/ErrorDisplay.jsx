// src/flashcard-app/ErrorDisplay.jsx
import PropTypes from 'prop-types';

const ErrorDisplay = ({ message }) => {
    return (
        <div className="error">
            {message}
        </div>
    );
};

// Добавляем валидацию пропсов
ErrorDisplay.propTypes = {
    message: PropTypes.string.isRequired, // Указываем, что message - это обязательный пропс
};

export default ErrorDisplay;
