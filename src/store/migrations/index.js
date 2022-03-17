import runMigrations, { registerMigration } from './runner';
import collectState from './00-collect-state';
import setDefaultNames from './01-set-default-names';
import resetPermissions from './02-reset-permissions';
import addFungibleTokensNewFields from './03-add-fungible-tokens-new-fields';
import addNamesNewFields from './04-add-names-new-fields';
import changeTransactionsStructure from './05-change-transactions-structure';

registerMigration(collectState);
registerMigration(setDefaultNames);
registerMigration(resetPermissions);
registerMigration(addFungibleTokensNewFields);
registerMigration(addNamesNewFields);
registerMigration(changeTransactionsStructure);

export default runMigrations;
