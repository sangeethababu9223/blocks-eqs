import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<RichText.Content 
		{ ...useBlockProps.save() } 
		tagName="h2" 
		value={ attributes.content } 
		/>
	);
}
