gendiff:
	node bin/gendiff.js
publish:
	npm publish --dry-run
lint:
	npx eslint
lint-fix:
	npm run lint -- --fix