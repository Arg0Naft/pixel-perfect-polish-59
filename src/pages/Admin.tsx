import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut, Save, Plus, Trash2, GripVertical } from "lucide-react";
import Seo from "@/components/Seo";

type Tab = "texts" | "cards" | "faq";

const SECTION_LABELS: Record<string, string> = {
  problems: "Проблемы",
  howitworks: "Как работает",
  ingredients: "Состав",
  audience: "Аудитория",
  marketplaces: "Маркетплейсы",
};

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<Tab>("texts");

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Загрузка...</p>
      </div>
    );
  }

  if (!user || !isAdmin) return null;

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "texts", label: "Тексты" },
    { key: "cards", label: "Карточки" },
    { key: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Seo title="Админ — ТимиЛор" description="Панель управления контентом." path="/admin" noindex />
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
              <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-md text-sm">Тими</span>
              <span className="italic text-primary ml-1 text-sm">Лор</span>
            </span>
            <span className="text-xs text-muted-foreground">Админ</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← На сайт
            </a>
            <button onClick={handleSignOut} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" /> Выйти
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex gap-2 mb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "texts" && <TextsEditor />}
        {tab === "cards" && <CardsEditor />}
        {tab === "faq" && <FaqEditor />}
      </div>
    </div>
  );
};

// === Texts Editor ===
const TextsEditor = () => {
  const [items, setItems] = useState<{ id: string; key: string; value: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data } = await supabase.from("site_content").select("*").order("key");
    setItems(data ?? []);
    setLoading(false);
  };

  const handleChange = (id: string, value: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, value } : i)));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    for (const item of items) {
      await supabase.from("site_content").update({ value: item.value }).eq("id", item.id);
    }
    queryClient.invalidateQueries({ queryKey: ["site-content"] });
    setMessage("Сохранено!");
    setSaving(false);
    setTimeout(() => setMessage(""), 2000);
  };

  if (loading) return <p className="text-muted-foreground">Загрузка...</p>;

  const KEY_LABELS: Record<string, string> = {
    hero_badge: "Hero — бейдж",
    hero_subtitle: "Hero — подзаголовок",
    hero_description: "Hero — описание",
    hero_cta_primary: "Hero — кнопка 1",
    hero_cta_secondary: "Hero — кнопка 2",
    hero_feature_1: "Hero — фича 1",
    hero_feature_2: "Hero — фича 2",
    hero_feature_3: "Hero — фича 3",
    problems_title: "Проблемы — заголовок",
    problems_subtitle: "Проблемы — подзаголовок",
    howitworks_title: "Как работает — заголовок",
    howitworks_subtitle: "Как работает — подзаголовок",
    ingredients_title: "Состав — заголовок",
    ingredients_subtitle: "Состав — подзаголовок",
    audience_title: "Аудитория — заголовок",
    audience_subtitle: "Аудитория — подзаголовок",
    buy_title: "Где купить — заголовок",
    buy_subtitle: "Где купить — подзаголовок",
    buy_email_prompt: "Где купить — текст формы",
    buy_email_success: "Где купить — успех",
    faq_title: "FAQ — заголовок",
    faq_subtitle: "FAQ — подзаголовок",
    footer_description: "Футер — описание",
    footer_disclaimer: "Футер — дисклеймер",
    footer_copyright: "Футер — копирайт",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Тексты секций</h2>
        <div className="flex items-center gap-3">
          {message && <span className="text-sm text-accent font-medium">{message}</span>}
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Сохранение..." : "Сохранить"}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-xl border border-border p-4">
            <label className="block text-xs font-medium text-muted-foreground mb-1">
              {KEY_LABELS[item.key] || item.key}
            </label>
            {item.value.length > 80 ? (
              <textarea
                value={item.value}
                onChange={(e) => handleChange(item.id, e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            ) : (
              <input
                value={item.value}
                onChange={(e) => handleChange(item.id, e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// === Cards Editor ===
const CardsEditor = () => {
  const [section, setSection] = useState("problems");
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    loadCards();
  }, [section]);

  const loadCards = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("content_cards")
      .select("*")
      .eq("section", section)
      .order("sort_order");
    setCards(data ?? []);
    setLoading(false);
  };

  const handleChange = (id: string, field: string, value: string) => {
    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const handleSave = async () => {
    setSaving(true);
    for (const card of cards) {
      await supabase
        .from("content_cards")
        .update({ title: card.title, description: card.description, icon: card.icon, sort_order: card.sort_order })
        .eq("id", card.id);
    }
    queryClient.invalidateQueries({ queryKey: ["content-cards", section] });
    setMessage("Сохранено!");
    setSaving(false);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleAdd = async () => {
    const maxOrder = cards.length > 0 ? Math.max(...cards.map((c) => c.sort_order)) : 0;
    await supabase.from("content_cards").insert({
      section,
      title: "Новая карточка",
      description: "Описание",
      icon: "Star",
      sort_order: maxOrder + 1,
    });
    loadCards();
  };

  const handleDelete = async (id: string) => {
    await supabase.from("content_cards").delete().eq("id", id);
    loadCards();
    queryClient.invalidateQueries({ queryKey: ["content-cards", section] });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-xl font-bold">Карточки</h2>
        <div className="flex items-center gap-3">
          {message && <span className="text-sm text-accent font-medium">{message}</span>}
          <button
            onClick={handleAdd}
            className="flex items-center gap-1 bg-card border border-border px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
          >
            <Plus className="w-4 h-4" /> Добавить
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "..." : "Сохранить"}
          </button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {Object.entries(SECTION_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSection(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              section === key
                ? "bg-accent text-accent-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-muted-foreground">Загрузка...</p>
      ) : (
        <div className="space-y-3">
          {cards.map((card) => (
            <div key={card.id} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-start gap-3">
                <GripVertical className="w-4 h-4 text-muted-foreground mt-2 shrink-0" />
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Заголовок</label>
                    <input
                      value={card.title}
                      onChange={(e) => handleChange(card.id, "title", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Иконка</label>
                    <input
                      value={card.icon}
                      onChange={(e) => handleChange(card.id, "icon", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Порядок</label>
                    <input
                      type="number"
                      value={card.sort_order}
                      onChange={(e) => handleChange(card.id, "sort_order", e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-muted-foreground mb-1">Описание</label>
                    <textarea
                      value={card.description}
                      onChange={(e) => handleChange(card.id, "description", e.target.value)}
                      rows={2}
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => handleDelete(card.id)}
                      className="flex items-center gap-1 text-sm text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// === FAQ Editor ===
const FaqEditor = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const { data } = await supabase.from("faq_items").select("*").order("sort_order");
    setItems(data ?? []);
    setLoading(false);
  };

  const handleChange = (id: string, field: string, value: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  const handleSave = async () => {
    setSaving(true);
    for (const item of items) {
      await supabase
        .from("faq_items")
        .update({ question: item.question, answer: item.answer, sort_order: item.sort_order })
        .eq("id", item.id);
    }
    queryClient.invalidateQueries({ queryKey: ["faq-items"] });
    setMessage("Сохранено!");
    setSaving(false);
    setTimeout(() => setMessage(""), 2000);
  };

  const handleAdd = async () => {
    const maxOrder = items.length > 0 ? Math.max(...items.map((i) => i.sort_order)) : 0;
    await supabase.from("faq_items").insert({
      question: "Новый вопрос",
      answer: "Ответ",
      sort_order: maxOrder + 1,
    });
    loadData();
  };

  const handleDelete = async (id: string) => {
    await supabase.from("faq_items").delete().eq("id", id);
    loadData();
    queryClient.invalidateQueries({ queryKey: ["faq-items"] });
  };

  if (loading) return <p className="text-muted-foreground">Загрузка...</p>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Вопросы и ответы</h2>
        <div className="flex items-center gap-3">
          {message && <span className="text-sm text-accent font-medium">{message}</span>}
          <button
            onClick={handleAdd}
            className="flex items-center gap-1 bg-card border border-border px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
          >
            <Plus className="w-4 h-4" /> Добавить
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "..." : "Сохранить"}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-card rounded-xl border border-border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs text-muted-foreground">Порядок: </label>
              <input
                type="number"
                value={item.sort_order}
                onChange={(e) => handleChange(item.id, "sort_order", e.target.value)}
                className="w-16 rounded-lg border border-input bg-background px-2 py-1 text-xs text-center focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Вопрос</label>
              <input
                value={item.question}
                onChange={(e) => handleChange(item.id, "question", e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-xs text-muted-foreground mb-1">Ответ</label>
              <textarea
                value={item.answer}
                onChange={(e) => handleChange(item.id, "answer", e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
              />
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="flex items-center gap-1 text-sm text-destructive hover:text-destructive/80 transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
