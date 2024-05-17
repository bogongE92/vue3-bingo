/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		/* 'plugin:vue/vue3-essential', */
		'plugin:prettier/recommended',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
	],
	// axios await 오류 잡아주기
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		// 프로세스 환경에 맞춰서 만약에 프로덕션일 때는 에러로 콘솔을 사용 못하게 하고 개발중일때는 사용할 수 있도록 off로 한다.
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'prettier/prettier': [
			// 프리티어에서 설정 : 에러로 표시
			'error',
			{
				singleQuote: true, // single 쿼테이션 사용 여부
				semi: true, // 세미콜론 사용 여부
				useTabs: true, // 탭 사용 여부
				tabWidth: 4,
				trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
				printWidth: 80, //  줄 바꿈 할 폭 길이
				bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
				arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
			},
		],
	},
};
