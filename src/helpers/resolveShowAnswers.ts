import { UserCommentProps } from "../components/Comment/types";

interface ResolveShowAnswersProps {
    withAnswersText: Exclude<UserCommentProps['withAnswersText'], undefined>;
    answers: UserCommentProps['answers'];
};

export function resolveShowAnswers({ withAnswersText, answers }: ResolveShowAnswersProps): boolean {
    return withAnswersText && answers.length > 0;
};