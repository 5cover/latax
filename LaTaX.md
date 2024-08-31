$$
\begin{align*}

&⟨syntax⟩ \to ⟨.nl⟩ mdMath ⟨.nl⟩ alignL \begin{pmatrix}
    ⟨.nl⟩ mdMath ⟨.nl⟩
    ⟨topLevelElement⟩
\end{pmatrix}^*
⟨.nl⟩ alignR ⟨.nl⟩
\\
&⟨topLevelElement⟩ \to amp ⟨.⟩ \begin{Bmatrix*}[l]
    header \\
    ⟨rule⟩ \\
\end{Bmatrix*}
\\
&⟨rule⟩ \to ruleName ⟨.⟩ to \begin{pmatrix}
    ⟨.⟩
    ⟨item⟩
\end{pmatrix}^+
\\
&⟨item⟩ \to \begin{Bmatrix*}[l]
    ⟨cases⟩ \\
    ⟨group⟩ \\
    ⟨split⟩ \\
    ruleName \\
    ⟨terminal⟩ \\
\end{Bmatrix*} \begin{pmatrix}
    ⟨.⟩
    ⟨quantifier⟩
\end{pmatrix}^?
\\
&⟨cases⟩ \to casesL ⟨.⟩ ⟨case⟩ \begin{pmatrix}
    ⟨.nl.⟩
    ⟨case⟩
\end{pmatrix}^*
⟨.nl.⟩^?
casesR
\\
&⟨case⟩ \to \begin{Bmatrix*}[l]
    ⟨rule⟩ ⟨.⟩ \\
    \begin{pmatrix}⟨item⟩ ⟨.⟩\end{pmatrix}^+ \\
\end{Bmatrix*}
\\
&⟨group⟩ \to groupL ⟨.⟩ \begin{pmatrix}
    ⟨item⟩
    ⟨.⟩
\end{pmatrix}^* groupR
\\
&⟨split⟩ \to splitL ⟨.⟩ ⟨split.item⟩ \begin{pmatrix}
    ⟨.nl.⟩
    ⟨split.item⟩
\end{pmatrix}^*
⟨.nl.⟩^?
splitR
\\
&⟨split.item⟩ \to amp \begin{pmatrix}
    ⟨.⟩
    ⟨item⟩
\end{pmatrix}^+
\\
&⟨terminal⟩ \to \begin{Bmatrix*}[l]
    text \\
    tokenName \\
\end{Bmatrix*}
\\
&⟨quantifier⟩ \to caret ⟨.⟩ ⟨quantifierSup⟩
\\
&⟨quantifierSup⟩ \to \begin{Bmatrix*}[l]
    zeroOrOne \\
    zeroOrMore \\
    oneOrMore \\
    braceL ⟨.⟩ zeroOrMore ⟨.⟩ csl ⟨.⟩ braceR \\
    braceL ⟨.⟩ oneOrMore ⟨.⟩ csl ⟨.⟩ braceR \\
\end{Bmatrix*}
\\
&⟨.⟩ \to ws^*
\\
&⟨.nl⟩ \to \begin{Bmatrix*}[l]
    nl \\
    ws \\
\end{Bmatrix*}^*
\\
&⟨.nl.⟩ \to ws^* nl\ ws^*

\end{align*}
$$
