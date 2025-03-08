export default function ProgressBar({ percentage }) {
    return (
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        >
          <span>{percentage}%</span>
        </div>
      </div>
    );
  }
  