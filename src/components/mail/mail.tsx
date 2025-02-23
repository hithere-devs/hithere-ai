import { mails } from './data';
import { MailDisplay } from './mail-display';
import { MailList } from './mail-list';

const Mail = () => {
	return (
		<div className='flex justify-between w-full gap-4'>
			<MailList items={mails} />
			<MailDisplay mail={mails[0]} />
		</div>
	);
};

export default Mail;
