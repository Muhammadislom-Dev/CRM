import "./Progress.scss";

const Progress = () => {
  return (
    <div className="progress">
      <h2 className="progress-name">Holati bo’yicha analiz</h2>
      <ul className="progress-list">
        <li>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Guruhga qo’shildi </p> 47%
            </span>
            <progress max="100" value="47"></progress>
          </span>

          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Ketib qoldi </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Ko’tarmadi </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>
        </li>
        <li>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> O’ylab ko’radi </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>

          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Probniga keldi </p> 17%
            </span>
            <progress max="100" value="22"></progress>
          </span>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Rad qildi </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>
        </li>
        <li>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Raqam xato </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>
          <span className="progress-blok">
            <span className="progress-precent">
              <p className="progress-text"> Tel qilish kerak </p> 1%
            </span>
            <progress max="100" value="5"></progress>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Progress;
