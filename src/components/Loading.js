import '../styles/layout/Loading.scss';

function Loading(props) {
  const renderLoader = () => {
    if (props.isLoading === true) {
      return (
        <div className='lds-ellipsis'>
          <p>Cargando...</p>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }
  };

  return <>{renderLoader()}</>;
}

export default Loading;
