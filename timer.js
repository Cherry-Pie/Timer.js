"use strict";

function Timer(callback, delay) {
    this.setTimeout(callback, delay);
    this.is_pause = false;
}

Timer.prototype.setTimeout = function(callback, delay) {
    var self = this;
    if (this.timer) {
        window.clearTimeout(this.timer);
    }
    this.is_finished = false;
    this.callback = callback;
    this.remaining = delay;
    this.delay = delay;
    this.timer = window.setTimeout(function() {
        self.is_finished = true;
        self.callback();
    }, delay);
    this.start = window.Date.now();
}

Timer.prototype.add = function(delay) {
    if (this.is_finished) {
        return;
    }

    delay = this.remaining + delay;
    this.setTimeout(this.callback, delay);
    if (this.is_pause) {
        this.pause();
    }
}

Timer.prototype.pause = function() {
    if (this.is_finished) {
        return;
    }
    if (this.timer) {
        window.clearTimeout(this.timer);
    }
    this.remaining -= window.Date.now() - this.start;
    this.is_pause = true;
};

Timer.prototype.resume = function() {
    if (this.is_finished) {
        return;
    }
    this.start = window.Date.now();
    this.setTimeout(this.callback, this.remaining);
    this.is_pause = false;
};

Timer.prototype.destroy = function() {
    if (this.timer) {
        window.clearTimeout(this.timer);
    }
};
