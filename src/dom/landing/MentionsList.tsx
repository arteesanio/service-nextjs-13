import { GiCheckMark, GiCrossedSwords, GiRadarSweep, GiLaurelCrown, GiTrophy, GiBarbedArrow } from 'react-icons/gi';

const MentionItem = ({ title, description, className, Icon }: any) => {
  return (
    <div className={'bg-white tx-black w-max-300px pa-4 tx-altfont-1 ' + className}
      style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 90% 0%)" }}
    >
      <div className='tx-altfont-2 flex items-center'>
        <Icon className='mr-2' /> 
        {title}
      </div>
      <hr className='opaci-10 mb-2' />
      <i>{description}</i>
    </div>
  );
};

const mentions = [
  { title: 'Gestión de Reputación', description: 'Gestión integral de la reputación para individuos, marcas, empresas y entidades gubernamentales. Servicios incluyen limpieza de reputación, monitoreo y construcción de reputación positiva. Garantía de confidencialidad y alta tasa de satisfacción.', className: '', Icon: GiCheckMark },
  { title: 'Limpieza de Reputación', description: 'Eliminación, desindexación y modificación de contenido negativo en línea. Asesoría legal y estrategia global para la eliminación de contenido. Asegura que los enlaces negativos sean inrastreados o modificados.', className: '', Icon: GiCrossedSwords },
  { title: 'Monitoreo de Reputación', description: 'Escaneo de redes en tiempo real para monitorear la reputación en línea. Intercepta y maneja crisis de reputación en motores de búsqueda, redes sociales, foros y la web profunda. Utiliza algoritmos propietarios para análisis de sentimiento e interceptación de crisis.', className: '', Icon: GiRadarSweep },
  { title: 'Construcción de Reputación Positiva', description: 'Mejora la presencia positiva en línea. Coloca contenido neutral y positivo en motores de búsqueda y redes sociales. Alcanza objetivos de reputación futura en un corto período de tiempo.', className: '', Icon: GiLaurelCrown },
  { title: 'Gestión de Crisis', description: 'Anticipa y gestiona posibles crisis de reputación. Desarrolla planes de acción y estrategias de respuesta inmediata. Monitorea y adapta las estrategias en tiempo real para minimizar daños.', className: '', Icon: GiTrophy },
  { title: 'Análisis de Datos y Monitoreo de Big Data', description: 'Utiliza big data y ciencia de datos para análisis y monitoreo en profundidad. Proporciona conocimientos a través de plataformas geo-habilitadas y multilingües. Alertas y reportes personalizables para monitoreo y análisis continuo.', className: 'Q_sm_x', Icon: GiBarbedArrow },
];

export const MentionsList = () => {
  return (
    <div className='pos-rel flex-wrap gap-4 w-max-1080px pb-8'>
      {mentions.map((mention, index) => (
        <MentionItem
          key={index}
          title={mention.title}
          description={mention.description}
          className={mention.className}
          Icon={mention.Icon}
        />
      ))}
    </div>
  );
};
