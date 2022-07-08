import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __( 'Blocks Eqs – hello from the saved content!', 'blocks-eqs' ) }
		</p>
	);
}
