// Core
import del from 'del';

// Task
const clean = (cb) => {
    return del.bind(null, ['dist']);
    cd();
}

export default clean;