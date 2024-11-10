export const Base_card = ({ title, description, icon }: Base_Card) => (
    <li className="flex items-start space-x-4 bg-gradient-to-r from-indigo-100 to-indigo-200 card-base card-hover">
        <div className="flex-shrink-0 text-4xl">{icon}</div>
        <div>
            <h3 className="header_h3">{title}</h3>
            <p className="paragraph">{description}</p>
        </div>
    </li>
);

interface Base_Card {
    title: string;
    description: string;
    icon: string;
}