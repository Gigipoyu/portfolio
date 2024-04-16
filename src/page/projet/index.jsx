import { useLocation } from 'react-router-dom';

const Projet = () => {
  const location = useLocation();
  const projet = location.state?.item;
  return (
    <div>{ projet.title  }</div>
  )
}

export default Projet