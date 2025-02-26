// jest.resolver.js
module.exports = function resolver(path, options) {
    return options.defaultResolver(path, {
        ...options,
        packageFilter: (pkg) => {
            if (pkg.name === 'next' || (pkg.name && pkg.name.startsWith('@next/'))) {
                delete pkg.exports;
                delete pkg.module;
                delete pkg.type;
            }
            return pkg;
        },
    });
};