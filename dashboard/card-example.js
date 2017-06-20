import { Card } from 'semantic-ui-react'

//import style from './dashboard.less'

const items = [
  {
    header: 'Project Report - April',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%'
  },
  {
    header: 'Project Report - May',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%'
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%'
  },
  {
    header: 'Project Report - July',
    description:
      'Podcasting operational change management inside of workflows to establish a framework. ',
    meta: 'ROI: 22%'
  },
  {
    header: 'Project Report - August',
    description:
      'Guerrilla marketing out of scope we need to socialize the comms with the wider stakeholder community highlights out of the loop we want to see more charts',
    meta: 'ROI: 37%'
  },
  {
    header: 'Project Report - September',
    description:
      'Collaboratively administrate empowered markets via plug-and-play networks.',
    meta: 'ROI: 28%'
  },
  {
    header: 'Project Report - October',
    description:
      'Networks--action-items, recontextualize value utilize, visualize, design optimize magnetic remix',
    meta: 'ROI: 25%'
  },
  {
    header: 'Project Report - November',
    description:
      'Platform branding ROI. Conversation marketing big data hit the like button leverage tablet buzzword native content. ',
    meta: 'ROI: 19%'
  },
  {
    header: 'Project Report - December',
    description:
      'Brand awareness thought leadership fanbassador vertical-specific intuitive target audience. Inbound phablet council seamless quiet period chatvertizing.',
    meta: 'ROI: 25%'
  }
]

const CardExampleGroup = () =>
  <div>
    <Card.Group items={items} />
  </div>

export default CardExampleGroup
