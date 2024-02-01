import { type FC } from 'react'

import { SocialLinks } from 'src/components/social-links/social-links'

import styles from './index.module.scss'
import { AddressIconSvg } from 'src/UI/icons/addressIconSVG'
import { PhoneIconSvg } from 'src/UI/icons/phoneIconSVG'
import { MailIconSvg } from 'src/UI/icons/mailIconSVG'
import { ContactsMap } from 'src/components/contacts-map/contacts-map'
import { RegionSelection } from 'src/components/region-selection/region-selection'

export const FeedbackAddress: FC = () => {
	return (
		<div className={styles.feedbackAddress}>
			<RegionSelection className={styles.feedbackSelectRegion} />
			<ContactsMap points={[55.745032, 37.599139]} />
			<ul className={styles.contactsList}>
				<li>
					<AddressIconSvg />
					119019, Москва, Гагаринский пер., 4/2
				</li>
				<li>
					<PhoneIconSvg />8 (495) 695-07-06
				</li>
				<li>
					<MailIconSvg />
					<a href='mailto:csvoopik@mail.ru'>csvoopik@mail.ru</a>
				</li>
			</ul>
			<p className={styles.feedbackSocialsTitle}>Мы в социальных сетях</p>
			<SocialLinks className={styles.feedbackSocials} />
		</div>
	)
}
