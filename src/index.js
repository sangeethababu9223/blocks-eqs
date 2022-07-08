import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType( metadata.name, {
	attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'h2',
        },
    },
	edit: Edit,
	save,
} );
