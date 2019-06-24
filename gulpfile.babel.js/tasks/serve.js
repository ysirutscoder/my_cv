// Core
import browserSync from 'browser-sync';

// Task
const serve = (cb) => {
        return browserSync({
            server: {
                baseDir: './dist'
            },
            port: 8080,
            notify: false
        });
   cb();
};

export default serve;