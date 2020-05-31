import { fromEvent } from 'rxjs';
import { map, concatMap, takeUntil } from 'rxjs/operators';

(() => {
	var container = document.getElementById('container');
	var rect = container.getBoundingClientRect();
	var sprite = document.getElementById('sprite');

	var down$ = fromEvent(sprite, "mousedown");
	var move$ = fromEvent(container, "mousemove");
	var up$ = fromEvent(container, "mouseup");

	down$.pipe(
		concatMap(down => move$.pipe(
			takeUntil(up$),
			map(move => ({left: move.pageX - down.offsetX, top: move.pageY - down.offsetY}))
		))
	).subscribe(
		pos => {sprite.style.left = (pos.left - rect.left) + "px"; sprite.style.top = (pos.top - rect.top) + "px";}
	);
})();

