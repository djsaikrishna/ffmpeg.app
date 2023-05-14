import { RouteComponentProps } from "wouter-preact";
import { useMemo } from "preact/hooks";

import Commands from "../../utils/commands/Commands";
import { TagList } from "../TagList";

import s from "./styles.module.css";

type IProps = RouteComponentProps<{ slug: string }>;

export const CommandPage = ({ params: { slug } }: IProps): JSX.Element => {
	const command = useMemo(() => {
		return Commands.getFromSlug(slug);
	}, [slug]);

	if (!command) {
		// TODO: Return error page, maybe with suggestions
		return (
			<div className={s.container}>
				<p className={s.title}>{"Error!"}</p>
			</div>
		);
	}

	return (
		<div className={s.container}>
			<div className={s.box}>
				<p className={s.title}>{command.name}</p>
				<TagList className={s.tags} tags={command.tags} />
				<p className={s.hr} />
				<p className={s.description}>{command.description}</p>
				<p className={s.command}>{command.command}</p>
			</div>
		</div>
	);
};
