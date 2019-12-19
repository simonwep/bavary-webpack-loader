export default compiler => {
    return new Promise((resolve, reject) => {
        compiler.run(
            (error, stats) => error ?
                reject(error) :
                resolve(stats)
        );
    });
}
