const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const paths = {
    src: {
        scss: "src/scss/**/*.scss",
    },
    dist: {
        css: "dist/css/",
    },
};

gulp.task("sass", (done) => {
    gulp.src(paths.src.scss)
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(cleanCSS())
        .pipe(
            rename({
                suffix: ".min",
            })
        )
        .pipe(gulp.dest(paths.dist.css));
    done();
});
